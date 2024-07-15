import { Container, Row, Col, Card, Image } from "react-bootstrap";
import wifi from "../../assets/images/wifi.png";
import reactI from "../../assets/images/react.png";
import computer from "../../assets/images/computer.png";
const Experience = () => {
  return (
    <>
      <Container className="d-flex flex-column justify-content-center pb-5">
        <Row>
          <h2
            className="w-100 text-center mt-5"
            style={{ fontSize: "clamp(15px, 8vw, 50px)", fontWeight: "bold" }}
          >
            Unmatched Tamil <br />
            Educational Experience
          </h2>

          <Col xl={4} className="mt-5">
            <Card
              className="w-100 p-3 border border-dark shadow"
              style={{ height: "305px" }}
            >
              <div
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                className="border p-1 d-flex align-items-center justify-content-center mt-2"
              >
                <Image
                  src={wifi}
                  width={`100%`}
                  alt={`wifi`}
                  loading={`lazy`}
                ></Image>
              </div>
              <h5 className="fw-bold ms-2 mt-4" style={{ fontSize: "28px" }}>
                Experienced Faculty
              </h5>

              <p
                style={{ fontSize: "22px", color: "#686464" }}
                className="ms-2 p-1"
              >
                Our teachers bring years of expertise to provide top-notch
                education in the Tamil language.
              </p>
            </Card>
          </Col>
          <Col xl={4} className="mt-5">
            <Card
              className="w-100 p-3 border border-dark shadow"
              style={{ height: "305px" }}
            >
              <div
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                className="border p-1 d-flex align-items-center justify-content-center mt-2"
              >
                <Image
                  src={reactI}
                  width={`100%`}
                  alt={`wifi`}
                  loading={`lazy`}
                ></Image>
              </div>
              <h5 className="fw-bold ms-2 mt-4" style={{ fontSize: "28px" }}>
                Comprehensive Curriculum
              </h5>

              <p
                style={{ fontSize: "22px", color: "#686464" }}
                className="ms-2"
              >
                Our curriculum covers all aspects of Tamil language and culture,
                ensuring a holistic learning.
              </p>
            </Card>
          </Col>
          <Col xl={4} className="mt-5">
            <Card
              className="w-100 p-3 border border-dark shadow"
              style={{ height: "305px" }}
            >
              <div
                style={{ width: "50px", height: "50px", borderRadius: "50px" }}
                className="border p-1 d-flex align-items-center justify-content-center mt-2"
              >
                <Image
                  src={computer}
                  width={`100%`}
                  alt={`wifi`}
                  loading={`lazy`}
                ></Image>
              </div>
              <h5 className="fw-bold ms-2 mt-4" style={{ fontSize: "28px" }}>
                Cultural Immersion
              </h5>

              <p
                style={{ fontSize: "22px", color: "#686464" }}
                className="ms-2 p-1"
              >
                Experience authentic Tamil culture through immersive activities
                that make learning enjoyable and engaging.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Experience;
