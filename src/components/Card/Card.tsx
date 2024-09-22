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
    <div
      onClick={clickHandler}
      className="card"
    >
      <>
        <div className="card__img">
          <img
            src={titleImageUrl}
          ></img>
        </div>
        <div className="card__block">
          <div className="card__title">
            <h3>{title}</h3>
            <span className="accordion__tag">{techStacks[0]}</span>
          </div>
          <p className="card__desc">{smallDescription}</p>
        </div>
      </>
    </div>
  );
};

export default Card;
