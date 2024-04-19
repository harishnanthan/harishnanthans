import { Email, Github, LinkedIn } from "../../assets/icons/socialIcons";
import "./Home.scss";

const Home: React.FunctionComponent = () => (
  <div className="home fullWidth-withPadding">
    <div className="home_intro">
      <h1 className="home_intro_h1">
        Hello, I'm Harish, <br />
        <span>Full Stack Developer</span> && <br />
        <span>Pragmatic Programmer</span>...
      </h1>
      <p className="home_intro_p">I have 2 years' experience at Tekion</p>
      <p className="home_intro_p">
        I value <span>clarity, empathy,</span> and <span>integrity</span> above
        all else. These ideals guide my approach to problem solving and life in
        general
      </p>
      <ul className="home_intro_social_links">
        <li>
          <a href="mailto:harishnanthans@gmail.com">
            <Email />
          </a>
        </li>
        <li>
          <a href="mailto:harishnanthans@gmail.com">
            <Github />
          </a>
        </li>
        <li>
          <a href="mailto:harishnanthans@gmail.com">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
