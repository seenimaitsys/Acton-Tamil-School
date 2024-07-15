import { Container, Row, Col, Image } from "react-bootstrap";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
const Footer = () => {
  return (
    <>
      {/* Footer section */}
      <footer className={`text-center text-lg-start text-muted `}>
        <Container className={`text-center text-md-start bg-blue-400`} fluid>
          <Row className={`d-flex align-items-center justify-content-between`}>
            <Col xl={6} className={`p-3 `}>
              <p className={`ms-5`}>
                Our goal is to empower
                <br /> our students with Tamil
                <br /> knowledge and skills.
              </p>
              {/* Footer copyright */}
              <div className={`ms-5`}>
                © 2024 Copyright:
                <a
                  className={`text-primary fw-bold ms-1`}
                  href={`https://actontamilschool.com/`}
                >
                  actontamilschool.com
                </a>
              </div>
            </Col>
            <Col
              xl={6}
              className={`d-flex gap-3 d-flex align-items-center justify-content-center  p-3`}
            >
              <a
                href={`https://www.facebook.com/ActonTamilSchool/`}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  src={facebook}
                  alt={`facebook`}
                  width={`65px`}
                  height={`65px`}
                  loading={`lazy`}
                ></Image>
              </a>
              <div
                className={`w-3`}
                style={{ height: "50px", backgroundColor: "black" }}
              ></div>
              <a
                href={`https://www.youtube.com/@actontamilschool8567`}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                <Image
                  src={youtube}
                  alt={`youtube`}
                  width={`65px`}
                  height={`65px`}
                  loading={`lazy`}
                ></Image>
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Footer;
