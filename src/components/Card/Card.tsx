import { motion } from "framer-motion";
import "./Card.scss";
import { useEffect, useState } from "react";
import githubAPI from "../../api/octokit";

type RepoData = {
  language: string;
  description: string;
};

type CardProps = {
  name: string;
};

const Card: React.FunctionComponent<CardProps> = ({ name }) => {
  const [repoData, setRepoData] = useState<RepoData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
      setIsLoading(true);
      githubAPI.GET_REPO(name).then(({ data }) => setRepoData(data)).finally(() => setIsLoading(false));
  }, [name]);

  console.log(repoData);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="card"
    >
      {isLoading && <p>Loading...</p>}
      {repoData && (
        <>
          <p className="card__subHeading">{repoData.language}</p>
          <p className="card__heading">{name}</p>
          <p className="card__description">{repoData.description}</p>
        </>
      )}
    </motion.div>
  );
};

export default Card;
