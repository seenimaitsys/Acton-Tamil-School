import { Container, Row, Col, Image } from "react-bootstrap";
import aboutimage from "../../assets/images/aboutimage.webp";

const AboutContent = () => {
  return (
    // Main container with fluid property for full width
    <Container fluid className={`bg-blue-300`}>
      <Row
        className={`d-flex align-items-center justify-content-center p-3 p-xl-5 p-md-5`}
      >
        {/* Column to wrap the content, adjust based on screen size */}
        <Col
          xl={11}
          xs={12}
          className={`d-flex flex-column flex-xl-row p-0 bg-orange-100`}
        >
          {/* Text content section */}
          <Col xl={8} className={`p-1 p-xl-6`}>
            <h1
              className={`text-blue-100 text-center text-xl-start fw-bold letterSpacing-1 animate__animated animate__fadeIn animate__delay-0.4s`}
              style={{
                fontSize: `clamp(10px, 7vw, 56px)`,
              }}
            >
              Our Mission:
            </h1>
            <p
              className={`lh-lg lh-xs-0 text-blue-100 text-center text-xl-start animate__animated animate__fadeIn animate__delay-0.6s`}
              style={{ fontSize: `clamp(10px, 5vw, 28px)` }}
            >
              Enhance Visitor Welcoming Experiences Streamline Operations for
              All Business Types Promote a Safe and Secure Environment Support
              Businesses in Embracing Digital Transformation
            </p>
          </Col>
          {/* Image section */}
          <Col xs={12} xl={4}>
            <Image src={aboutimage} width={"100%"} height={"100%"} />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutContent;
