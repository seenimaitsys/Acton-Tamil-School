import { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountUp from "react-countup";

const Counts = () => {
  const [counterOn, setCounterOn] = useState(false);
  const counterRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCounterOn(true);
          } else {
            setCounterOn(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  return (
    <Container fluid>
      <Row className={`d-flex align-items-center justify-content-center mt-5`}>
        <Col
          style={{ backgroundColor: "#AE0000" }}
          className={`d-flex flex-column  flex-md-row rounded  align-items-center justify-content-center`}
          xl={8}
          xs={10}
          md={11}
        >
          <Col>
            <div ref={counterRef}>
              {counterOn && (
                <h2
                  className={`text-center text-white mt-3`}
                  style={{ fontSize: "40px" }}
                >
                  <CountUp start={0} end={100} delay={0} duration={2} />+
                </h2>
              )}
            </div>
            <p
              className={`text-center text-white`}
              style={{ fontSize: "18px" }}
            >
              Dedicated Students enrolled
              <br /> in our institute
            </p>
          </Col>
          <div
            className={`w-3  d-none d-md-block mt-md-3`}
            style={{ height: "75px", backgroundColor: "white" }}
          ></div>
          <div
            className={` w-25 mt-3 mb-3  d-block d-md-none`}
            style={{ height: "3px", backgroundColor: "white" }}
          ></div>
          <Col>
            <div ref={counterRef}>
              {counterOn && (
                <h2
                  className={`text-center text-white mt-3`}
                  style={{ fontSize: "40px" }}
                >
                  <CountUp start={0} end={25} delay={0} duration={2} />+
                </h2>
              )}
            </div>
            <p
              className={`text-center text-white`}
              style={{ fontSize: "18px" }}
            >
              Expert faculty guiding <br />
              young minds
            </p>
          </Col>
          <div
            className={`w-3 d-none d-md-block mt-md-3`}
            style={{ height: "75px", backgroundColor: "white" }}
          ></div>
          <div
            className={` w-25 mt-3 mb-3 d-block d-md-none`}
            style={{ height: "3px", backgroundColor: "white" }}
          ></div>
          <Col>
            <div ref={counterRef}>
              {counterOn && (
                <h2
                  className={`text-center text-white mt-3`}
                  style={{ fontSize: "40px" }}
                >
                  <CountUp start={0} end={15} delay={0} duration={2} />+
                </h2>
              )}
            </div>
            <p
              className={`text-center text-white`}
              style={{ fontSize: "18px" }}
            >
              Events conducted
              <br /> enhancing student growth
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Counts;
