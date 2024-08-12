import { Col, Container, Image, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
const Loading = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col
            className={`d-flex flex-column gap-2 align-items-center justify-content-center mt-130`}
          >
            <Image src={logo} fluid width={"100px"} height={"100px"}></Image>
            <h2>Loading...</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loading;
