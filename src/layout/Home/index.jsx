import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FAQ from "../../components/FAQ";
import Experience from "../../components/Experience";
import Offerings from "../../components/Offerings";
import ContactUs from "../../components/Contact";
import CarouselImage from "../../components/CarouselImage";

const HomeLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <main>
        <section>
          <CarouselImage />
        </section>

        <section className="mt-5 " style={{ backgroundColor: "#F4F3F2" }}>
          <Experience />
        </section>
        <section>
          <Offerings />
        </section>
        <section className="mt-5 " style={{ backgroundColor: "#F4F3F2" }}>
          <FAQ />
        </section>
        <section id={`contact`} className={`mb-5`}>
          <ContactUs />
        </section>
      </main>
    </>
  );
};

export default HomeLayout;
