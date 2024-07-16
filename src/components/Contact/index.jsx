import { Container, Row, Col } from "react-bootstrap";
const ContactUs = () => {
  return (
    <>
      <Container>
        <Row className={`d-flex align-items-center justify-content-center`}>
          <h2
            className="w-100 text-center fw-bold letterSpacing-1"
            style={{ fontSize: "50px" }}
          >
            Contact US
          </h2>
          <Col
            className={`d-flex flex-column flex-xl-row flex-lg-row border border-dark shadow rounded p-0 mt-3`}
            xl={10}
            xs={11}
          >
            <Col className={`d-flex flex-column align-items-center `}>
              <h2
                className="w-100 text-center mt-3 fw-bold letterSpacing-1"
                style={{ fontSize: "40px" }}
              >
                Get in Touch
              </h2>
              <h2 className={`fw-normal`}>Phone</h2>
              <p style={{ fontSize: "22px" }} className={`text-center `}>
                <a
                  href={`tel:978-393-1772`}
                  className={`text-muted text-decoration-none`}
                >
                  {`978-393-1772`}
                </a>
              </p>
              <h2>Email</h2>
              <p
                style={{ fontSize: "22px" }}
                className={`text-center text-muted`}
              >
                <a
                  href={`mailto:admin@actontamilschool.com`}
                  className={`text-muted text-decoration-none`}
                >
                  {`admin@actontamilschool.com`}
                </a>
              </p>
              <h2>Address</h2>
              <p
                style={{ fontSize: "22px" }}
                className={`text-center text-muted`}
              >
                <a
                  href={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.541916210396!2d-71.46089642440738!3d42.48003042751441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e393c44916c563%3A0x6ba8a107c00a3499!2sACTON%20TAMIL%20SCHOOL!5e0!3m2!1sen!2sin!4v1721027613242!5m2!1sen!2sin`}
                  className={`text-muted text-decoration-none`}
                >
                  {
                    <>
                      Acton Boxbrough <br />
                      Regional High School,
                      <br />
                      36 Charter Rd,
                      <br />
                      Acton,MA 01720
                    </>
                  }
                </a>
              </p>
            </Col>
            <Col
              className={`p-1 d-flex flex-column align-items-center justify-content-center`}
            >
              <iframe
                title="Address : Boston , USA"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2942.541916210396!2d-71.46089642440738!3d42.48003042751441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e393c44916c563%3A0x6ba8a107c00a3499!2sACTON%20TAMIL%20SCHOOL!5e0!3m2!1sen!2sin!4v1721027613242!5m2!1sen!2sin`}
                allowFullScreen
                width={`100%`}
                height={`440px`}
                referrerPolicy={`no-referrer-when-downgrade`}
                loading={`lazy`}
              ></iframe>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactUs;
