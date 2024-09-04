import { motion } from "framer-motion";
import "./Home.scss";

const Home: React.FunctionComponent = () => (
  <div className="home">
    <div className="home_intro">
      <motion.h1
       className="home_intro_h1">
        <span className="blue-highlight">Full-Stack Developer</span>{" "}
        <i>with a</i>
        <span className="blue-highlight">Pragmatic</span>{" "}
        <i>Mindset.</i>
      </motion.h1>
      <p className="home_intro_p">
        I specialize in crafting seamless digital
        experiences from the ground up. 
        My expertise spans building <b className="pink-highlight">pixel-perfect frontends</b> that captivate 
        users and developing robust, <b className="pink-highlight">high-performance backends</b> that ensure efficiency and scalability. I
        thrive on solving complex problems with a <b className="pink-highlight">pragmatic and
        solution-oriented mindset</b>, ensuring each line of code serves a purpose
        and enhances the overall product.
      </p>
    </div>
    <button>Get My Resume</button>
  </div>
);

export default Home;
