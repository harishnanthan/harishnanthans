import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/icons/home.svg";
import "./Navigation.scss";

const Navigation: React.FunctionComponent = () => {
  return (
    <nav className="nav__wrapper">
      <div className="nav__wrapper-logo">
        <img src={HomeIcon} />
      </div>
      <div className="nav__wrapper-place">
        <ul>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="/">selected works</NavLink> */}
          <NavLink to="/about">About me</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
