import {
  Container,
  Offcanvas,
  Navbar,
  Image,
  Col,
  Nav,
  Button,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll progress element
      let scrollProgress = document.getElementById("progress");
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      let scrollValue = Math.round((pos * 100) / calcHeight);

      // Display or hide the scroll progress element based on scroll position
      if (pos > 20) {
        scrollProgress.style.display = "grid";
      } else {
        scrollProgress.style.display = "none";
      }

      // Add click event listener to scroll progress element for smooth scrolling to top
      scrollProgress.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Update the scroll progress element's background based on scroll value
      scrollProgress.style.background = `conic-gradient(rgba(84, 168, 199, 0.7) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;

      const currentScrollTop = window.pageYOffset;

      // Show or hide the navbar based on scroll direction
      if (currentScrollTop > lastScrollTop) {
        setIsNavVisible(false); // Scroll down
      } else {
        setIsNavVisible(true); // Scroll up
      }

      // Update the last scroll position, ensuring it's non-negative
      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <>
      <header
        className={`navbar ${
          isNavVisible ? "top-0" : "top-n130"
        } position-fixed w-100   bg-white  zIndex-1000`}
      >
        <Navbar expand={`lg`} className={`w-100`}>
          <Container fluid>
            {/* Logo and brand name */}
            <Col
              xs={9}
              xl={4}
              lg={5}
              sm={6}
              className={`d-flex  align-items-center`}
            >
              <Image src={logo} width={"90px"} height={"90px"}></Image>
              <h2 className={` fw-bold ms-2 w-100`}>
                <a
                  href={`/`}
                  className={` text-decoration-none`}
                  style={{
                    color: "black",
                  }}
                >
                  Acton Tamil School
                </a>
              </h2>
            </Col>
            {/* Navbar toggle button for smaller screens */}
            <Navbar.Toggle aria-controls={`navbarScroll`} />
            {/* Offcanvas for the responsive navbar */}
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-sm`}
              aria-labelledby={`offcanvasNavbarLabel-expand-sm}`}
              placement={`end`}
              backdrop={true}
            >
              {/* Offcanvas header with brand logo */}
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  <Navbar.Brand
                    href={`/`}
                    className={`d-flex align-items-center`}
                  >
                    <Image src={logo} width={"90px"}></Image>
                    <h2 className={`ms-1 mt-15  fw-bold `}>
                      Acton Tamil School
                    </h2>
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              {/* Offcanvas body with navigation links */}
              <Offcanvas.Body>
                <Nav
                  className={`d-flex w-100 flex-grow-1 gap-5 gap-lg-3 gap-xl-5 align-items-center me-xl-3`}
                >
                  <Nav.Link
                    href={`/`}
                    className={`text-nowrap text-black nav-link-hover-underline fw-normal  fs-22 letterSpacing-1`}
                  >
                    Home
                  </Nav.Link>
                  <Nav.Link
                    href={`/about`}
                    className={`text-nowrap text-black nav-link-hover-underline fw-normal  fs-22 letterSpacing-1`}
                  >
                    About Us
                  </Nav.Link>
                  <Nav.Link
                    href={`/#contact`}
                    className={`text-nowrap text-black nav-link-hover-underline fw-normal  fs-22 letterSpacing-1`}
                  >
                    Contact Us
                  </Nav.Link>
                  <Nav.Link
                    href={`/events`}
                    className={`text-nowrap text-black nav-link-hover-underline fw-normal  fs-22 letterSpacing-1`}
                  >
                    Events
                  </Nav.Link>
                  <Col className="d-flex align-items-center justify-content-end">
                    <Button
                      style={{
                        backgroundColor: "#AE0000",
                        fontSize: "25px",
                        fontWeight: "400",
                      }}
                      className="border-0 shadow"
                    >
                      <a
                        href={`https://www.catamilacademy.org/cta/StudentReg.aspx`}
                        className={`text-white text-decoration-none`}
                      >
                        {`Join Us`}
                      </a>
                    </Button>
                  </Col>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
