import { Tekion } from "../../assets/icons/socialIcons";
import "./Experience.scss";

const EXPERIENCE = [
  {
    icon: <Tekion />,
    header: "React Developer",
    company: "Tekion",
    from: "June - 2022",
    to: "present",
  }
];

type ExperienceCardProps = {
  icon: React.ReactNode;
  header: string;
  company: string;
  from: string;
  to: string;
};

const ExperienceCard: React.FunctionComponent<ExperienceCardProps> = ({
  icon,
  header,
  from,
  to,
}) => (
  <div className="experienceCard">
    <div className="experienceCard__image">{icon}</div>
    <div className="experienceCard__content">
      <div className="experienceCard__position">
        {header}
      </div>
      <div className="experienceCard__period">
        {from} - {to}
      </div>
    </div>
  </div>
);

const Experience: React.FunctionComponent = () => (
  <div className="experience fullWidth-withPadding">
    <div className="experience__content">
      <h2 className="experience__content-h2">Experience</h2>
      <div className="experience__content-cards">
        {EXPERIENCE.map((props) => (
          <ExperienceCard {...props} />
        ))}
        <p className="quote_section">
          "The next company could be yours, or my own."
        </p>
      </div>
    </div>
  </div>
);

export default Experience;
