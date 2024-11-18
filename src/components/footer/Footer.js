import styles from './Footer.module.css';
import reactLogo from '../../images/logo192.png'

function Footer() {
  return (
    <footer className={styles['app-footer']}>
      &copy; Chartcaster {new Date().getFullYear()}
      <br />
      <img src={reactLogo} alt="React Logo" className={styles['footer-logo']} />
    </footer>
  );
  
}

export default Footer;