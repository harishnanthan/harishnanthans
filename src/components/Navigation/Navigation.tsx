import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation: React.FunctionComponent = () => {
  return (
    <nav className="nav__wrapper">
      <div className="nav__wrapper-logo">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 0C8.08907 0 0 8.08908 0 18C0 27.9109 8.08907 36 18 36C27.9109 36 36 27.9109 36 18C36 8.08908 27.9109 0 18 0ZM5.02834 18C5.02834 14.2834 6.63158 10.8583 9.18218 8.52633C10.2024 7.57896 11.9514 7.87045 12.6802 9.10931L17.1984 16.9069C17.6356 17.6356 17.6356 18.5101 17.1984 19.2389L12.6802 27.0364C11.9514 28.3482 10.2024 28.5668 9.10931 27.5466C6.63158 25.0688 5.02834 21.7166 5.02834 18ZM23.3198 26.8907L18.8016 19.0931C18.3644 18.3644 18.3644 17.4899 18.8016 16.7611L23.3198 8.96356C24.0486 7.72469 25.7247 7.4332 26.8178 8.38057C29.3684 10.7126 30.9717 14.1377 30.9717 17.8543C30.9717 21.5709 29.3684 24.996 26.8178 27.3279C25.7247 28.4939 24.0486 28.2024 23.3198 26.8907Z"
            fill="#201B21"
          />
        </svg>
      </div>
      <div className="nav__wrapper-place">
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About me</NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
