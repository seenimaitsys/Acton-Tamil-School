import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Image, Carousel, Button } from "react-bootstrap";
import FAQ from "../../components/FAQ";
import Experience from "../../components/Experience";
import Offerings from "../../components/Offerings";
import ContactUs from "../../components/Contact";
import { slideImage } from "../../components/Events";
const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Container fluid className={`mt-130 `}>
        <Row>
          <Col xl={6} lg={6} className="ps-xl-5">
            <Carousel interval={1000}>
              {slideImage.map((value, index) => {
                return (
                  <Carousel.Item key={index}>
                    <Image
                      src={value.image}
                      width={`100%`}
                      height={`490px`}
                      alt={"Acton Tamil School Events"}
                      loading={`lazy`}
                      className={`shadow`}
                      style={{ borderRadius: "20px" }}
                    ></Image>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col
            xl={6}
            lg={6}
            className="d-flex flex-column justify-content-lg-center gap-lg-1 mt-md-5 mt-lg-0"
          >
            <Col xl={8} className="mt-2">
              <h1
                style={{ fontSize: "clamp(10px, 10vw, 75px)" }}
                className="w-100 text-center text-xl-start text-lg-start"
              >
                Excellence in Tamil Education
              </h1>
            </Col>
            <Col xl={10}>
              <p
                style={{ fontSize: "26px" }}
                className="mt-3 w-100 text-center text-xl-start text-lg-start"
              >
                Learn Tamil culture and language with qualified teachers in a
                supportive environment.
              </p>
            </Col>
            <Col
              xl={3}
              className="d-flex justify-content-center justify-content-xl-start justify-content-lg-start"
            >
              <Button
                style={{ backgroundColor: "#AE0000", fontSize: "20px" }}
                className="border-0 p-2 mt-3 shadow"
              >
                <a
                  href={`https://www.catamilacademy.org/cta/login.aspx?ReturnUrl=%2fcta`}
                  className={`text-white text-decoration-none`}
                >
                  {`Register Today`}
                </a>
              </Button>
            </Col>
          </Col>
        </Row>
      </Container>

      <section className="mt-5 " style={{ backgroundColor: "#F4F3F2" }}>
        <Experience />
      </section>
      <section>
        <Offerings />
      </section>
      <section className="mt-5 " style={{ backgroundColor: "#F4F3F2" }}>
        <FAQ />
      </section>
      <section id={`contact`} className={`mb-5`}>
        <ContactUs />
      </section>
    </>
  );
};

export default HomeLayout;
