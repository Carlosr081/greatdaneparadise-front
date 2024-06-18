import './Copyright.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>&copy; {new Date().getFullYear()} Great Dane Paradise. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
