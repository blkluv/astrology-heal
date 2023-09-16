import './CardReading.css';
import useFetch from '../../hooks/useFetch';
import { TarotProps } from '../../types/TarotProps';
import Loading from '../../components/Loading/Loading';
import TarotCard from '../../components/TarotCard/TarotCard';

export default function CardReading() {
  const url = 'https://jps-tarot-api.azurewebsites.net/api/Tarot/GetShuffled';
  const { data: cards, loading, error } = useFetch<TarotProps[]>(url);

  if (error) {
    console.log(`Error: ${error.message}`);
  }

  const handleRerenderClick = () => {
    window.location.reload(); // Toggle the state value to trigger a re-render
  };

  return (
    <div>
      <h2>Tarot Card Reading</h2>
      {error && <div>{error?.message}</div>}
      {loading && <Loading />}
      <div className="card__list">
        {' '}
        <div className="card__list">
          {cards?.slice(0, 3).map((card) => (
            <TarotCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      <button onClick={handleRerenderClick}>Generate a new reading</button>
    </div>
  );
}