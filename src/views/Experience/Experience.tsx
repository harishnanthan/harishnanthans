import Card from "../../components/Card";
import "./Experience.scss";

const EXPERIENCE = [
  {
    subtext: "web development",
    header: "Tekion",
    content:
      "Group voice messages which string together into conversation-stories.",
  },
];

const Experience: React.FunctionComponent = () => (
  <div className="experience fullWidth-withPadding">
    <div className="experience__content">
      <h2 className="experience__content-h2">Experience</h2>
      <div className="experience__content-cards">
        {EXPERIENCE.map((props) => (
          <Card {...props} />
        ))}
        <p className="quote_section">"The next company could be yours, or my own."</p>
      </div>
    </div>
  </div>
);

export default Experience;
