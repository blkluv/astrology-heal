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
          <h1 className="home__logo">iam ♁</h1>
          <h2 className="home__heading">Tap Into The PPV Heal®️ Economy</h2>
          <p className="home__subheading">
           HealXYZ is the Web5 (Web2 + Web3) spiritual 5D-Commerce tribe PPV network powered by Love Money. HealXYZ Discord subscribers
           receive monthly airdrops of Love Money, which they can spread h2h (Heart-to-heart) within their Discord tribe, LUV metaverse,
           and IRL (In Real Life) for dating or tipping. Subscribers buy and sell spiritual services and products as D-commerce (digital
           currency) from verified Heal®️’s around the world. 
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
            url={'https://discord.com/servers/healxyz-1165931081564946443 '} // Discord invite link
            target={'_blank'}
            className="home__button" // You may want to apply appropriate styles
          />
            <Button
            as="link"
            children="@healxyz TikTok →"
            url={'https://tiktok.com/@healxyz'} // Discord invite link
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
        <h2 className="home__heading">HEALXYZ PPV DISCORD TIERS</h2>
        <ul className="home__list">
          <li className="home__list-item">
            <img src={moth} className="home__icon invert" alt="Moth"></img>
            <h3>✨HEAL</h3>
            <p>
              Are you seeking answers and guidance regarding spiritual healing? Subscribe to
              our channel and claim your $20,000 in Love Money. If you have any questions, please
              reach out to a healer in the #aah channel. You can also find information on magical
              potions and natural healing remedies in the #health channel. Remember, we all have the
              ability to heal others by sending them love in the form of Love Money. However, it's
              important to prioritize our own healing before we can level up to date others. Subscribe
              today with a free 7 day trail.
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterfly} className="home__icon invert" alt="Butterfly"></img>
            <h3>✨DATING</h3>
            <p>
              Are you spiritually single and ready to mingle? HealXYZ is paying
              subscribers 20K in Love Money (ONE $LUV) to use for flirting in our
              PPV Discord channels #soulmate #matchmaker #talk or in a @HealXYZ
              social media post. Post a dating ad in #soulmate with the compatible
              zodiac you’re manifesting with your Love Money account number. Set up
              the #matchmaker tinder-like bot to send you auto matches daily. When
              someone sends you Love Money join them in the #talk channel live. Schedule
              a Discord event to go on a live (audio + video) date or use your Love Money
              to go on a live @HealXYZ social media date. 
            </p>
          </li>
          <li className="home__list-item">
            <img src={butterflyTwo} className="home__icon" alt="Butterfly Two"></img>
            <h3>✨BIZ </h3>
            <p>
              All business is spiritual. Manifest your new spiritual career by subscribing
              to the Web5 HealXYZ Discord to claim your $100K in Love Money. Subscribers can
              join the #counseling #wealth and verified Heal®️ channels for guidance or create
              a branded Discord channel and LUV Metaverse channel for their tribe. The first
              verified Heal®️ is the Ancient Aliens star and famous Gemologist Leela Hutchinson.
              HealXYZ Twin Flame creators The Wizard of Hahz and 💞 Dr.Candy host live episodes
              and answer all questions by subscribers. Use Love Money to promote your ✨Biz live
              on the @HealXYZ socials.
            </p>
          </li>
        </ul>
        <img src={moonPhases} className="home__img--second-section" alt="Moon Phases"></img>
      </section>
    </div>
  );
}
