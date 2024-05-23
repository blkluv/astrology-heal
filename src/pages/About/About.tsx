import { useState } from 'react';
import shapes from '../../assets/images/shapes.gif';
import Accordion from '../../components/Accordion/Accordion';
import { accordionData } from '../../data/accordionData';
import './About.css';

export default function About() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index: number) => {
    if (window.innerWidth < 768) {
      // On mobile devices, we want to toggle the accordion by sliding it up and down.
      const accordionContent = document.querySelector(`#accordion-content-${index}`);
      accordionContent.classList.toggle('accordion__content--active');
    } else {
      // On desktop devices, we want to toggle the accordion by rotating the arrow icon.
      setActiveIndex(index === activeIndex ? -1 : index);
    }
  };

  return (
    <section className="about">
      <h1>About</h1>
      <h3>Heal X, Y, &amp; Z 101</h3>
      <p className="about__info">
        In this section we will walk you through all you need to know about HealXYZ.
      </p>
      <img src={shapes} alt="Geometric shapes" className="about__image" />
      <div className="about__accordion">
        {accordionData.map(({ title, content }, index) => (
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

