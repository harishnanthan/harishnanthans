// Works.tsx
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import githubAPI from "../../api/octokit";
import "./Works.scss";

// Define the type for the repository data
type Repo = {
  name: string;
};

const Works: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    setIsLoading(true);
    githubAPI
      .GET_ALL_REPOS()
      .then((response) => setRepos(response.data))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="works fullWidth-withPadding">
      <div className="works__content">
        <h2 className="works__content-h2">Recent Works</h2>
        <div className="works__content-cards">
          {repos.map((repo) => (
            <Card key={repo.name} name={repo.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
