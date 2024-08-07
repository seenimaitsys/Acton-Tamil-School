import { Container, Row, Col, Image, Carousel, Button } from "react-bootstrap";
import { slideImage } from "../Events";
import { UseGetScreenResolution } from "../GetScreenResolution";
const CarouselImage = () => {
  const [currentResolution] = UseGetScreenResolution();
  return (
    <Container fluid className={`mt-130`}>
      <Row>
        <Col xl={6} lg={6} className="ps-xl-5">
          <Carousel interval={1000}>
            {slideImage.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <Image
                    src={value.image}
                    width={`100%`}
                    height={currentResolution <= 992 ? `340px` : `490px`}
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
  );
};

export default CarouselImage;
