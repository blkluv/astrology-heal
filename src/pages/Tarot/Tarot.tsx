import { useEffect, useState } from 'react';
import { useCallback } from 'react';
import useFetch from '../../hooks/useFetch';
import TarotCard from '../../components/TarotCard/TarotCard.tsx';
import Loading from '../../components/Loading/Loading.tsx';
import { TarotProps } from '../../types/TarotProps.ts';
import { Pagination } from '../../components/Pagination/Pagination.tsx';
import CardReading from '../../components/CardReading/CardReading.tsx';

import '../Tarot/Tarot.css';

export default function Tarot() {
  const [page, setPage] = useState(1);
  const [filterCriteria, setFilterCriteria] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 10;

  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/GetShuffled';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  const filteredCards = cards?.filter((card) => {
    if (filterCriteria === 'All') {
      return card.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return (
      card.type === filterCriteria &&
      card.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const totalFilteredPages = Math.ceil(
    (filteredCards?.length || 0) / itemsPerPage
  );

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const cardsToDisplay = filteredCards?.slice(startIndex, endIndex) || [];

  // useEffect(() => {
  //   if (page < 1) {
  //     setPage(1);
  //   } else if (page > totalFilteredPages) {
  //     setPage(totalFilteredPages);
  //   }
  // }, [page, totalFilteredPages]);

  useEffect(() => {
    if (page < 1) {
      setPage(1);
    } else if (totalFilteredPages && page > totalFilteredPages) {
      setPage(totalFilteredPages);
    }
  }, [page, totalFilteredPages]);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  const handleFilterChange = useCallback((criteria: string) => {
    setFilterCriteria(criteria);
    setPage(1);
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setPage(1);
  }, []);

  return (
    <div>
      <h1>Tarot Cards</h1>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All cards</button>
        <button onClick={() => handleFilterChange('Major')}>
          Major Arcana
        </button>
        <button onClick={() => handleFilterChange('Minor')}>
          Minor Arcana
        </button>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name 🔍"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
      />

      <div className="card__list">
        {cardsToDisplay.map((card) => (
          <TarotCard key={card.id} card={card} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={totalFilteredPages}
        handlePagination={setPage}
      />
      <CardReading />
    </div>
  );
}
