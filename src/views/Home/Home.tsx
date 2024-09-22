import "./Home.scss";

const Home: React.FunctionComponent = () => (
  <div className="home">
    <div className="home_intro">
      <h1 className="home_intro_h1">
        Full-Stack Engineer, <br />
        Pragmatic Programmer, <br />
        Core Focus on Speed, Clean, Readable, and Maintainable Code
      </h1>
      <p className="home_intro_p">
        As a Frontend Engineer, I love building interfaces that not only look
        good but feel fast and responsive. I’m all about writing clean,
        well-organized code that’s easy to maintain and scale as projects grow.
        For me, it’s not just about delivering a polished product—it’s about
        making sure the code behind it is efficient, easy to understand, and
        ready for whatever comes next.
      </p>
    </div>
    <button type="submit">
      <a href="/src/assets/resume/Harish-Nanthan-S.pdf" target="_blank">
        View My Resume!
      </a>
    </button>
  </div>
);

export default Home;
