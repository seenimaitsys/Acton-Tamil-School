import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./index.css";
import logo from "../../assets/images/logoweb.webp";
import anniversaryLogo from "../../assets/images/anniversary-10th.webp";

const LOGO_CYCLE = { normal: 4500, anniversary: 2500 };

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAnniversary, setShowAnniversary] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  // Quietly cycles the header logo seal
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }
    let timer;
    const tick = (showingAnniversary) => {
      setShowAnniversary(showingAnniversary);
      timer = setTimeout(
        () => tick(!showingAnniversary),
        showingAnniversary ? LOGO_CYCLE.anniversary : LOGO_CYCLE.normal
      );
    };
    const start = () => {
      timer = setTimeout(() => tick(true), LOGO_CYCLE.normal);
    };
    // Hold the first cycle until the site intro has landed its seal here.
    if (document.documentElement.classList.contains("ai-playing")) {
      window.addEventListener("ats:intro-end", start, { once: true });
    } else {
      start();
    }
    return () => {
      window.removeEventListener("ats:intro-end", start);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navLinkClasses = "header__link";
  const navClass = ({ isActive }) =>
    `${navLinkClasses} ${isActive ? "header__link--active" : ""}`;

  const mobileNavItemClasses = "header__mobile-link";
  const mobileNavClass = ({ isActive }) =>
    `${mobileNavItemClasses} ${isActive ? "header__mobile-link--active" : ""}`;

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? "header--scrolled" : "header--top"}`}
    >
      <div className="section-shell header__inner">
        {/* Brand logo & School name */}
        <div className="header__brand">
          <Link
            to="/"
            className="header__home-link"
            aria-label="Acton Tamil School home"
          >
            <span
              className={`brand-logo-wrap header__logo ${showAnniversary ? "is-anniversary" : ""}`}
            >
              <img src={logo} alt="" className="brand-logo-img brand-logo-default" />
              <img
                src={anniversaryLogo}
                alt=""
                className="brand-logo-img brand-logo-hover"
              />
            </span>
            <span className="header__brand-text">
              <strong className="header__title">
                Acton Tamil School
              </strong>
              <span
                lang="ta"
                className="header__subtitle"
              >
                ஆக்டன் தமிழ்ப் பள்ளி
              </span>
            </span>
          </Link>
          <Link
            className="header__anniversary"
            to="/#anniversary"
            onClick={() => setMenuOpen(false)}
          >
            <span aria-hidden="true">✦</span>{" "}
            <span className="header__anniversary-label">Celebrating</span> 10 Years
            <i
              className="bi bi-arrow-down-right header__anniversary-icon"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* ----------------------------------------------------
            1. DESKTOP VIEW NAVIGATION
            ---------------------------------------------------- */}
        <nav
          id="desktop-navigation"
          className="header__desktop-nav"
          aria-label="Desktop primary navigation"
        >
          <NavLink to="/" end className={navClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navClass}>
            Our school
          </NavLink>
          <NavLink to="/events" className={navClass}>
            Community
          </NavLink>
          <Link to="/#faq" className={navLinkClasses}>
            FAQ
          </Link>
          <Link to="/#contact" className={navLinkClasses}>
            Contact
          </Link>
          <a
            className="button button-small button-primary header__enroll"
            href="https://www.catamilacademy.org/cta/login.aspx?ReturnUrl=%2fcta"
            target="_blank"
            rel="noreferrer"
          >
            Enroll now
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </a>
        </nav>

        {/* Hamburger menu toggle button for Mobile */}
        <button
          type="button"
          className="header__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <i
            className={`bi ${menuOpen ? "bi-x-lg" : "bi-list"}`}
            aria-hidden="true"
          />
        </button>

        {/* ----------------------------------------------------
            2. MOBILE VIEW NAVIGATION (SEPARATE MOBILE CODE)
            ---------------------------------------------------- */}
        <nav
          id="mobile-navigation-menu"
          className={`header__mobile-menu ${menuOpen ? "header__mobile-menu--open" : ""}`}
          aria-label="Mobile navigation"
        >
          <NavLink to="/" end className={mobileNavClass} onClick={() => setMenuOpen(false)}>
            <i className="bi bi-house-door" aria-hidden="true" />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={mobileNavClass}
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-info-circle" aria-hidden="true" />
            <span>Our school</span>
          </NavLink>

          <NavLink
            to="/events"
            className={mobileNavClass}
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-calendar-event" aria-hidden="true" />
            <span>Community</span>
          </NavLink>

          <Link
            to="/#faq"
            className={mobileNavItemClasses}
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-question-circle" aria-hidden="true" />
            <span>FAQ</span>
          </Link>

          <Link
            to="/#contact"
            className={mobileNavItemClasses}
            onClick={() => setMenuOpen(false)}
          >
            <i className="bi bi-envelope" aria-hidden="true" />
            <span>Contact</span>
          </Link>

          <a
            className="button button-primary header__mobile-enroll"
            href="https://www.catamilacademy.org/cta/login.aspx?ReturnUrl=%2fcta"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Enroll now
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
