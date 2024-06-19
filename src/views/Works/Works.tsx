import { useEffect, useState } from "react";
import Card from "../../components/Card";
import githubAPI from "../../api/octokit.js";
import "./Works.scss";

const Works: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [works, setWorks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    githubAPI
      .GET_ALL_REPOS()
      .then(({ data }) => setWorks(data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="works fullWidth-withPadding">
      <div className="works__content">
        <h2 className="works__content-h2">Recent Works</h2>
        <div className="works__content-cards">
          {works.map(({ name }) => (
            <Card name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Works;
