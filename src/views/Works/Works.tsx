// import Card from "../../components/Card";
// import { WORKS } from "../../constants";
import "./Works.scss";

const Works: React.FunctionComponent = () => {
  return (
    <div className="works">
      <div className="works__content">
        <h2 className="works__content-h2">Selected Works</h2>
        <div className="works__content-cards">
          <h1>I'm working on it. In the meantime, please check <a href="https://github.com/harishnanthan">Github</a>...</h1>
          {/* {WORKS.map((repo) => (
            <Card
              key={repo.title}
              title={repo.title}
              techStacks={["New"]}
              smallDescription={repo.smallDescription}
              titleImageUrl={repo.titleImageUrl}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Works;
