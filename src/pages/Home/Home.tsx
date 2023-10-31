import zodiacWheel from '../../assets/images/zodiac-wheel.png';
import moonPhases from '../../assets/images/moon-phases.png';
import butterfly from '../../assets/images/butterfly.png';
import butterflyTwo from '../../assets/images/butterfly-2.png';
import moth from '../../assets/images/moth.png';

import Button from '../../components/Button/Button';

import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <section className="home__first-section">
        <div className="home__info">
          <h1 className="home__logo">heal☾</h1>
          <h2 className="home__heading">Let's Heal The World</h2>
          <p className="home__subheading">
             Join our quest to heal the world with an easy Q&A game. 
             Subscribe and answer spiritual healing questions to level 
             up, earn $LUV, crystals, and gain access to live events.
             Level up to become a master Heal®️✨?
          </p>
          <Button
            as="link"
            children="Learn More →"
            url={'/about'}
            target={'_self'}
            className="home__button"
          />
          <Button
            as="link"
            children="Subscribe →"
            url={'https://discord.gg/EMrwEPwcQU'} // Discord invite link
            target={'_blank'}
            className="home__button" // You may want to apply appropriate styles
          />
        </div>
        <img
          src={zodiacWheel}
          className="home__img--first-section invert"
          alt="Zodiac Wheel"
        ></img>
      </section>

      <section className="home__second-section">
        <h2 className="home__heading">Q&A Game Guide</h2>
        <ul className="home__list">
          <li className="home__list-item">
            <img src={moth} className="home__icon invert" alt="Moth"></img>
            <h3>Zodiac Signs</h3>
            <p>
              Embark on a cosmic adventure within our Discord game. Explore your
              birth chart, uncover the secrets of your sun, moon, and rising signs,
              and gain insights into your in-game destiny influenced by celestial
              movements. Master the art of navigating your fate with guidance from
              our expert players.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterfly} className="home__icon invert" alt="Butterfly"></img>
            <h3>Tarot Cards</h3>
            <p>
              Explore the mystic realm of tarot online. Delve into the practice 
              of divination with tarot card readings, gain insight into the meaning
              of each card, and receive counsel on matters of love, career, and
              spirituality. Our Master HealR tarot readers are ready to assist
              you in revealing the concealed wisdom held by the cards.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterflyTwo} className="home__icon" alt="Butterfly Two"></img>
            <h3>Numerology</h3>
            <p>
              Discover the hidden power of numbers through our numerology tools.
              Delve into the frequencies and forces linked to your name and birthdate,
              explore the mysteries of numerical computations, and attain deep
              understandings of your life's meaning. Embark on this voyage of
              self-exploration to Heal X, Y & Z.
            </p>
          </li>
        </ul>
        <img src={moonPhases} className="home__img--second-section" alt="Moon Phases"></img>
      </section>
    </div>
  );
}
