import { Container, Image, Row, Col } from "react-bootstrap";
import Action_About_image from "../../assets/images/Action-About-imag.png";
import Counts from "../../components/Counts";

// AboutLayout Component
const AboutLayout = () => {
  return (
    // Main container with top margin for spacing
    <Container className={`mt-130`} fluid>
      {/* Row to center the AboutContent component */}
      <Row className={`d-flex align-items-center justify-content-center`}>
        {/* AboutContent component which contains the main content */}
        <h1 className={`fw-bold text-center`} style={{ fontSize: "50px" }}>
          About Us
        </h1>
        <p className={`text-center`} style={{ fontSize: "30px" }}>
          Teaching Tamil in USA
        </p>
        <Image
          src={Action_About_image}
          width={`90%`}
          alt={`Action Tamil School!`}
          loading={`lazy`}
        ></Image>
        <h2
          style={{ fontSize: "clamp(15px, 8vw, 50px)" }}
          className={`fw-bold text-center mt-5`}
        >
          Why Choose Acton Tamil School
        </h2>
        <Col xl={7}>
          <p
            style={{ fontSize: "clamp(10px, 6vw, 30px)" }}
            className={` text-center mt-3 lh-sm letterSpacing-1`}
          >
            At Action Tamil School, USA, students receive high-quality Tamil
            education from experienced teachers, creating a strong cultural
            foundation.
          </p>
        </Col>
        <Counts />
        <h2
          style={{ fontSize: "clamp(15px, 8vw, 50px)" }}
          className={`fw-bold text-center mt-5`}
        >
          {`Discover Our School's Key Features`}
        </h2>
        <Col xl={8} className={`mt-2 mb-4`}>
          <p className={`text-center mt-2`} style={{ fontSize: "20px" }}>
            Welcome to School, a leading service provider in the field of
            teaching Tamil in the USA. Our mission is to promote and preserve
            the Tamil language and culture by providing high-quality education
            and resources to students of all ages and backgrounds. We believe
            that learning Tamil is not just about language acquisition, but also
            about fostering a sense of identity, heritage, and connection to the
            Tamil community.
          </p>
          <p className={`text-center mt-2`} style={{ fontSize: "20px" }}>
            At School, our vision is to be the premier institution for Tamil
            language education in the USA. We strive to create a nurturing and
            inclusive learning environment where students can develop their
            language skills, cultural understanding, and appreciation for Tamil
            literature, music, and arts.
          </p>
          <p className={`text-center mt-2`} style={{ fontSize: "20px" }}>
            Our goal is to empower our students with the knowledge and skills
            necessary to become proficient Tamil speakers and lifelong learners.
            We aim to instill a love for the Tamil language and culture, and to
            equip our students with the ability to communicate effectively in
            Tamil, both orally and in writing. We are committed to providing
            innovative teaching methods, engaging curriculum, and personalized
            attention to ensure the success of every student.
          </p>
          <p className={`text-center mt-2`} style={{ fontSize: "20px" }}>
            {`Join us at School and embark on a journey of Tamil language and
            cultural exploration. Together, let's celebrate the richness and
            beauty of the Tamil language and heritag`}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutLayout;
