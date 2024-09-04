import { useEffect } from "react";
import Card from "../../components/Card";
import { WORKS } from "../../constants";
import "./Projects.scss";

const Projects: React.FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects">
      <h1 className="projects__heading">Personal Portfolio Website</h1>
      <div className="projects__desc">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search
          for 'lorem ipsum' will uncover many web sites still in their infancy.
        </p>
        <button>live site</button>
      </div>

      <div className="projects__details">
        <div className="projects__details_l">
          <h3>Challenge</h3>
          <p>
            How might we help users easily start a conversation with recorded
            audio and an optional photo attachment? what make you beautiful for
            me as a developer for that is a better change to get an award
          </p>
        </div>
        <div className="projects__details_r">
          <div className="firstOne border-b">
            <h3>My Role</h3>
            <p>
              UX Design, Research, Interaction Design, Prototyping, Usability
              Testing, Motion + Visual Design
            </p>
          </div>
          <div className="border-b">
            <h3>Tools</h3>
            <p>Figma, paper + pencil</p>
          </div>
          <div className="projects__details-stack">
            <div>
              <h3>Year</h3>
              <p>2024</p>
            </div>
            <div className="border-l">
              <h3>Timeline</h3>
              <p>2 months</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="projects__ss">
      <h3>Screenshots</h3>
      <div className="projects__ss-wrapper">
        <div className="border-r border-b">
          <img src="https://images.pexels.com/photos/27141308/pexels-photo-27141308/free-photo-of-a-computer-screen-showing-a-waveform-of-sound.jpeg"></img>
          <p>Home screen</p>
        </div>
        <div className="border-b">
          <img src="https://images.pexels.com/photos/27141308/pexels-photo-27141308/free-photo-of-a-computer-screen-showing-a-waveform-of-sound.jpeg"></img>
          <p>Home screen</p>
        </div>
        <div className="border-r">
          <img src="https://images.pexels.com/photos/27141308/pexels-photo-27141308/free-photo-of-a-computer-screen-showing-a-waveform-of-sound.jpeg"></img>
          <p>Home screen</p>
        </div>
        <div className="">
          <img src="https://images.pexels.com/photos/27141308/pexels-photo-27141308/free-photo-of-a-computer-screen-showing-a-waveform-of-sound.jpeg"></img>
          <p>Home screen</p>
        </div>
      </div>
    </div> */}

      <div className="next_projects__wrapper">
        <h2>Next Projects!</h2>
        <div className="next_projects">
          <Card
            key={1}
            title={WORKS[0].title}
            techStacks={["New"]}
            smallDescription={WORKS[0].smallDescription}
            titleImageUrl={WORKS[0].titleImageUrl}
          />
           <Card
            key={1}
            title={WORKS[1].title}
            techStacks={["New"]}
            smallDescription={WORKS[1].smallDescription}
            titleImageUrl={WORKS[1].titleImageUrl}
          />
           <Card
            key={1}
            title={WORKS[2].title}
            techStacks={["New"]}
            smallDescription={WORKS[2].smallDescription}
            titleImageUrl={WORKS[2].titleImageUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
