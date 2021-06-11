/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-undef */
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.mainFooter} data-testid="footer">
    <p>
      <a href="https://www.temesghen.me" target="_blank" rel="noreferrer">
        Temesghen Tekeste &nbsp;
      </a>
      &copy; 2021, All Rights Reserved
    </p>
  </footer>
);

export default Footer;
