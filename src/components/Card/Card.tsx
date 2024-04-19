import "./Card.scss";

type CardProps = {
  subtext?: string,
  header?: string,
  content?: string,
}

const Card: React.FunctionComponent<CardProps> = ({ subtext, header, content }) => {
  return (
    <div className="card">
      <p className="card_subHeading">{subtext}</p>
      <p className="card__heading">{header}</p>
      <p className="card__desc">{content}</p>
    </div>
  );
};

export default Card;
