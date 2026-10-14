import "./index.css";
import logo from "../../assets/images/logoweb.webp";

const Loading = () => {
  return (
    <div className="loading" role="status">
      <img src={logo} alt="" className="loading__logo" />
      <span>Opening the school…</span>
    </div>
  );
};

export default Loading;
