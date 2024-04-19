import Card from "../../components/Card";
import "./Works.scss";

const WORKS = [
  {
    subtext: "typescript",
    header: "Clubhouse",
    content:
      "Group voice messages which string together into conversation-stories.",
  },
  {
    subtext: "typescript",
    header: "Clubhouse",
    content:
      "Group voice messages which string together into conversation-stories.",
  },
  {
    subtext: "typescript",
    header: "Clubhouse",
    content:
      "Group voice messages which string together into conversation-stories.",
  },
  {
    subtext: "typescript",
    header: "Clubhouse",
    content:
      "Group voice messages which string together into conversation-stories.",
  },
  {
    subtext: "typescript",
    header: "Clubhouse",
    content:
      "Group voice messages which string together into conversation-stories.",
  },
];

const Works: React.FunctionComponent = () => (
  <div className="works fullWidth-withPadding">
    <div className="works__content">
      <h2 className="works__content-h2">Recent Works</h2>
      <div className="works__content-cards">
        {WORKS.map((props) => (
          <Card {...props} />
        ))}
      </div>
    </div>
  </div>
);

export default Works;
