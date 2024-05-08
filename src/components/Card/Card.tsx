import { motion } from "framer-motion";
import "./Card.scss";

type CardProps = {
  subtext?: string;
  header?: string;
  content?: string;
};

const Card: React.FunctionComponent<CardProps> = ({
  subtext,
  header,
  content,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="card"
    >
      <p className="card_subHeading">{subtext}</p>
      <p className="card__heading">{header}</p>
      <p className="card__desc">{content}</p>
    </motion.div>
  );
};

export default Card;
