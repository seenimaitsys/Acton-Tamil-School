import Content from "../Content";
// import Header from "../components/Header"; // Header component commented out for now
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import "../../src/assets/css/main.min.css"; // custom bootstrap design
import Header from "../components/Header";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Header /> {/* Render the Header component */}
      <Content /> {/* Render the Content component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
}

export default App;
