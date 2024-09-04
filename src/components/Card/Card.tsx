import { motion } from "framer-motion";
import "./Card.scss";
import { useNavigate } from "react-router-dom";

type CardProps = {
  title: string;
  techStacks: [string];
  smallDescription: string;
  titleImageUrl: string;
};

const Card: React.FunctionComponent<CardProps> = (props) => {
  const { title, techStacks, smallDescription, titleImageUrl } = props;
  const navigate = useNavigate();

  const clickHandler = () => navigate('/projects/title')

  return (
    <motion.div
      onClick={clickHandler}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="card"
    >
      <>
        <div className="card__img">
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={titleImageUrl}
          ></motion.img>
        </div>
        <div className="card__block">
          <div className="card__title">
            <h3>{title}</h3>
            <span className="accordion__tag">{techStacks[0]}</span>
          </div>
          <p className="card__desc">{smallDescription}</p>
        </div>
      </>
    </motion.div>
  );
};

export default Card;
