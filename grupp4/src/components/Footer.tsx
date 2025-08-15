import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
export const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">

        <address className="contact-info">
          Tagliatellevägen 3 <br/> 
          123 45 Stockholm<br/>
          Telefon: <a className="a" href="tel:+46123456789">+46 123 45 67 89</a><br/>
          E-post: <a className="a" href="mailto:info@aldente.se">info@aldente.se</a>
        </address>

        <p>© Al dente company AB</p>

        <div className="social-links">
          <a className="social-links" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a className="social-links" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a className="social-links" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
      </div>

      </footer>
    </>
  );
};