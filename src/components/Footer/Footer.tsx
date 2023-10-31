import downloadApple from '../../assets/images/download-apple.svg';
import downloadAndroid from '../../assets/images/download-android.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer__download">
      <a href="https://discord.gg/EMrwEPwcQU">
          <img src={downloadApple} alt="Download on the App Store" />
        </a>
        <a href="https://nftv.luvnft.com">
          <img src={downloadAndroid} alt="Download on Google Play" />
        </a>
      </div>
      <p className="footer__contact">
        Got any feedback? Up for a chat? Shoot us an email or direct message the
        socials below.
      </p>
      <ul className="footer__socials">
        <li>
          <a href="https://luvnft.com">
          <FontAwesomeIcon icon="heart" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/97209941">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://nftv.luvnft.com">
            <i className="fa-brands fa-free-code-camp"></i>
          </a>
        </li>
        <li>
          <a href="mailto:info@healxyz.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </li>
      </ul>
      <div className="footer__copyright">
        <p>&copy; 2023 HealXYZ. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
