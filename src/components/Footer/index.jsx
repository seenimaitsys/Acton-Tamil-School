import "./index.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logoweb.webp";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-shell footer__grid">
        <div className="footer__brand">
          <Link
            to="/"
            className="footer__brand-link"
          >
            <img src={logo} alt="" className="footer__logo" />
            <span className="footer__brand-text">
              <strong className="footer__brand-name">
                Acton Tamil School
              </strong>
              <span lang="ta" className="footer__brand-ta">
                ஆக்டன் தமிழ்ப் பள்ளி
              </span>
            </span>
          </Link>
          <p className="footer__tagline">
            Helping the next generation speak, read, and celebrate Tamil with
            confidence.
          </p>
        </div>

        <div className="footer__column">
          <h2 className="footer__heading">
            Explore
          </h2>
          <Link
            to="/about"
            className="footer__link"
          >
            Our school
          </Link>
          <Link
            to="/events"
            className="footer__link"
          >
            Community events
          </Link>
          <Link
            to="/#faq"
            className="footer__link"
          >
            Frequently asked questions
          </Link>
        </div>

        <div className="footer__column">
          <h2 className="footer__heading">
            Get in touch
          </h2>
          <a
            href="tel:+1-978-393-1772"
            className="footer__link"
          >
            +1 978-393-1772
          </a>
          <a
            href="mailto:actontamilschool@gmail.com"
            className="footer__link"
          >
            actontamilschool@gmail.com
          </a>
          <span className="footer__address">
            36 Charter Road, Acton, MA 01720
          </span>
        </div>

        <div className="footer__column footer__column--social">
          <h2 className="footer__heading">
            Follow our community
          </h2>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/ActonTamilSchool/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acton Tamil School on Facebook"
              className="footer__social-link"
            >
              <i className="bi bi-facebook" aria-hidden="true" />
            </a>
            <a
              href="https://www.youtube.com/@actontamilschool8567"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Acton Tamil School on YouTube"
              className="footer__social-link"
            >
              <i className="bi bi-youtube" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="section-shell footer__bottom">
        <span>© {new Date().getFullYear()} Acton Tamil School</span>
        <span>Language · Culture · Community</span>
      </div>
    </footer>
  );
};

export default Footer;
