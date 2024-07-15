import { Container, Row, Col, Image } from "react-bootstrap";
import books from "../../assets/images/book.jpg";
const Offerings = () => {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center" fluid>
        <Row className="d-flex  justify-content-center ">
          <h2
            className="w-100 text-center mt-5"
            style={{ fontSize: "clamp(15px, 8vw, 50px)", fontWeight: "bold" }}
          >
            Learn About Our Varied <br />
            Educational Offerings
          </h2>
          <Col
            xl={3}
            className="d-flex flex-column justify-content-between mt-4"
          >
            <Col className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "50px",
                  backgroundColor: "#AE0000",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <h3 style={{ fontSize: "65px" }} className="text-white mt-2">
                  1
                </h3>
              </div>
              <h3
                className="w-100 text-center fw-bold mt-3"
                style={{ fontSize: "30px" }}
              >
                Academic Excellence
              </h3>
              <p
                className="w-100 text-center fw-normal text-muted"
                style={{ fontSize: "24px" }}
              >
                To bring Tamil language life, heritage, art, literature and
                culture concepts to everyone.
              </p>
            </Col>

            <Col className="d-flex flex-column align-items-center ">
              <div
                style={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "50px",
                  backgroundColor: "#AE0000",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <h3 style={{ fontSize: "65px" }} className="text-white mt-2">
                  2
                </h3>
              </div>
              <h3
                className="w-100 text-center fw-bold mt-3"
                style={{ fontSize: "30px" }}
              >
                Extracurricular Activities
              </h3>
              <p
                className="w-100 text-center fw-normal text-muted "
                style={{ fontSize: "24px" }}
              >
                Encouraging students to explore their interests.
              </p>
            </Col>
          </Col>
          <Col xl={4} className="mt-4">
            <Image
              src={books}
              alt={`books`}
              loading={`lazy`}
              width={`100%`}
              height={`590px`}
              className="shadow"
              style={{ borderRadius: "20px" }}
            ></Image>
          </Col>
          <Col
            xl={3}
            className="d-flex flex-column justify-content-between  mt-4"
          >
            <Col className="d-flex flex-column align-items-center">
              <div
                style={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "50px",
                  backgroundColor: "#AE0000",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <h3 style={{ fontSize: "65px" }} className="text-white mt-2">
                  3
                </h3>
              </div>
              <h3
                className="w-100 text-center fw-bold mt-3"
                style={{ fontSize: "30px" }}
              >
                Our Motive
              </h3>
              <p
                className="w-100 text-center fw-normal text-muted"
                style={{ fontSize: "24px" }}
              >
                To Bring all the people together through unique classical Tamil
                language.
              </p>
            </Col>

            <Col className="d-flex flex-column align-items-center ">
              <div
                style={{
                  width: "95px",
                  height: "95px",
                  borderRadius: "50px",
                  backgroundColor: "#AE0000",
                }}
                className="d-flex align-items-center justify-content-center"
              >
                <h3 style={{ fontSize: "65px" }} className="text-white mt-2">
                  4
                </h3>
              </div>
              <h3
                className="w-100 text-center fw-bold mt-3"
                style={{ fontSize: "30px" }}
              >
                Student Support
              </h3>
              <p
                className="w-100 text-center fw-normal text-muted "
                style={{ fontSize: "24px" }}
              >
                Comprehensive support for student well-being.
              </p>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Offerings;
