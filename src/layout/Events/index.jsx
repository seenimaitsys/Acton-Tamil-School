import { Container, Image, Row, Col } from "react-bootstrap";
import { EventImage } from "../../components/Events";
// AboutLayout Component
const EventsLayout = () => {
  return (
    // Main container with top margin for spacing
    <Container
      className={`mt-130 d-flex align-items-center justify-content-center `}
      fluid
    >
      {/* Row to center the AboutContent component */}
      <Row
        className={`p-0 p-xl-5 d-flex align-items-center justify-content-center`}
      >
        {/* AboutContent component which contains the main content */}
        <h1 className={`fw-bold text-center`} style={{ fontSize: "50px" }}>
          Our Events
        </h1>
        <p className={`text-center`} style={{ fontSize: "28px" }}>
          We mark special occasions with family and friends to create lasting
          memories
        </p>
        {EventImage.slice(0, 9).map((value, index) => {
          return (
            <Col
              xl={value.xl}
              md={value.md}
              xs={value.xs}
              className={`mt-3 p-1 p-xl-2`}
              key={index}
            >
              <Image
                src={value.image}
                width={`100%`}
                height={`200px`}
                loading={`lazy`}
                className={`background-styles`}
                style={{ borderRadius: "18px" }}
              ></Image>
            </Col>
          );
        })}
        <h2
          style={{ fontSize: "clamp(15px, 5.5vw, 40px)" }}
          className={`fw-bold text-center mt-5`}
        >
          Event : Acton Tamil School children on <br />
          successfully finishing the school year
        </h2>
        <Col xl={12} className={`mt-5`}>
          <iframe
            width={`100%`}
            height={`500px`}
            className={`rounded-18`}
            src={`https://www.youtube.com/embed/pKHmvMrTXLA?si=hL9jblmIuROiawND&autoplay=1`}
            title={`Tamil Thai Vazhthu`}
            frameBorder={0}
            allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`}
            referrerPolicy={`strict-origin-when-cross-origin`}
            allowFullScreen
          ></iframe>
        </Col>
        <h2
          style={{ fontSize: "clamp(15px,7vw, 40px)" }}
          className={`fw-bold text-center mt-4 mb-4`}
        >
          தமிழ்த்தாய் வாழ்த்து - Tamil Thai Vazhthu
        </h2>
        {EventImage.slice(9, 15).map((value, index) => {
          return (
            <Col
              xl={value.xl}
              md={value.md}
              xs={value.xs}
              className={`mt-3 p-1 p-xl-2`}
              key={index}
            >
              <Image
                src={value.image}
                width={`100%`}
                height={`200px`}
                loading={`lazy`}
                className={`background-styles`}
                style={{ borderRadius: "18px" }}
              ></Image>
            </Col>
          );
        })}
        <h2
          style={{ fontSize: "clamp(15px,8vw, 40px)" }}
          className={`fw-bold text-center mt-5`}
        >
          Event : Pongal School Celebration
        </h2>
        <Col xl={6}>
          <iframe
            width={`100%`}
            height={`315`}
            className={`rounded mt-5`}
            src={`https://www.youtube.com/embed/lEnvbGc0-ag?si=TkwNuppGyE3WVevc`}
            title={`Dance Thanmathi, Maya, Mahima, Akshara, Aadhya`}
            frameBorder={0}
            allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`}
            referrerPolicy={`strict-origin-when-cross-origin`}
            allowfullscreen
          ></iframe>
        </Col>
        <Col xl={6}>
          <iframe
            width={`100%`}
            height={`315`}
            className={`rounded mt-5`}
            src={`https://www.youtube.com/embed/VybhkgZmKZ0?si=LdBh2-1lOMDNpThi`}
            title={`Kids Games and Songs`}
            frameBorder={0}
            referrerPolicy={`strict-origin-when-cross-origin`}
            allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`}
            allowfullscreen
          ></iframe>
        </Col>
        <h2
          style={{ fontSize: "clamp(15px,6vw, 30px)" }}
          className={`fw-bold text-center mt-4`}
        >
          <a
            href={`https://www.facebook.com/ActonTamilSchool/`}
          >{`To View More Events...`}</a>
        </h2>
      </Row>
    </Container>
  );
};

export default EventsLayout;
