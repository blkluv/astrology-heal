import { useState } from 'react';
import shapes from '../../assets/images/shapes.gif';
import Accordion from '../../components/Accordion/Accordion';
import { AccordionData } from '../../data/accordionData'; // Correct import
import './About.css';

export default function About() {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <section className="about">
      <h1>About</h1>
      <h3>Heal X, Y, & Z 101</h3>
      <p className="about__info">
        In this section we will walk you through all you need to know about HealXYZ.
      </p>
      <img src={shapes} alt="Geometric shapes" className="about__image" />
      <div className="about__accordion">
        {AccordionData.map(({ title, content }, index) => (
          <Accordion
            key={index}
            title={title}
            content={content}
            isActive={index === activeIndex}
            onToggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </section>
  );
}

