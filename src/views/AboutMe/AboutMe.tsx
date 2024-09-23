import "./AboutMe.scss";
// import { WORK_FLOW } from "../../constants";

// const testimonials = [
//   {
//     id: 1,
//     img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     content:
//       '"An exceptional developer with a keen eye for detail. His ability to solve complex problems while maintaining clean, scalable code is unmatched. Truly a pleasure to work with."',
//     name: "Sara Johnson",
//     position: "Lead Developer",
//     at: "TechCorp",
//   },
//   {
//     id: 2,
//     img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     content:
//       '"He consistently delivers beyond expectations, bringing both speed and efficiency to every project. His contributions have been pivotal to our success."',
//     name: "Michael Lee",
//     position: "CTO",
//     at: "InnovateX",
//   },
//   {
//     id: 3,
//     img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     content:
//       '"A skilled frontend engineer who brings both creativity and technical expertise to the table. His focus on performance and usability has drastically improved our user experience."',
//     name: "Emily Davis",
//     position: "Product Manager",
//     at: "BrightSoft",
//   },
//   {
//     id: 4,
//     img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     content:
//       '"A true team player and problem solver. He has a unique ability to translate complex requirements into clean, efficient code. His impact on our projects has been significant."',
//     name: "James Anderson",
//     position: "Engineering Manager",
//     at: "DevWorks",
//   },
// ];

const AboutMe: React.FunctionComponent = () => {
  return (
    <div className="aboutMe__wrapper">
      <div className="aboutMe__content">
        <h2 className="aboutMe__content-h2">About Me</h2>
        <p className="aboutMe__content-p">
          Hi, I’m Harish, a passionate Frontend Engineer at Tekion based on India, where I
          focus on building fast, scalable web applications with clean,
          maintainable code. I’ve been working on optimizing our client
          applications using React. At Tekion, I’ve had the chance to lead some
          pretty exciting initiatives, like creating a custom toolkit that sped
          up project setup by 70%. This has really helped streamline the
          onboarding process for new projects, saving us tons of development
          time. I’ve also been working on improving the stability of our
          apps—cutting bugs by 20% and reducing load times by 4% across various
          modules. It’s all about delivering a smoother, better user experience!
          Besides my technical work, I enjoy mentoring junior developers through
          code reviews and pair programming. It’s rewarding to see their growth
          and how it boosts the entire team’s productivity.
          <br />
          <br />
          I’ve contributed to some awesome projects like the Global Feature
          Tracker, where I revamped a dealer feature management system. This led
          to a 25% performance improvement and a 10% reduction in deployment
          times. One of my proudest moments, though, was leading a team during a
          hackathon to develop Dealer Community—an online platform inspired by
          Stack Overflow. We built real-time knowledge sharing features and
          integrated an AI-driven auto-answer system, cutting support tickets by
          30%!
          <br />
          <br />
          When it comes to tech, I’m proficient in JavaScript, TypeScript,
          React, Redux, Webpack, and more. I’ve also dabbled in backend
          development with Node.js, MySQL, and MongoDB. For design and version
          control, Figma and Git are my go-to tools.
          <br />
          <br />
          I’m all about writing code that’s not just functional but clean,
          scalable, and maintainable. I believe well-documented and modular code
          is key to a successful project, especially when scaling. I always aim
          to make the code easier for the next developer who works with it
          (including future me!).
          <br />
          <br />
          When I’m not coding, I love exploring new tech, reading up on frontend
          best practices, or tinkering with developer tools. Outside of tech,
          you’ll probably find me with a good book, trying out new recipes, or
          taking care of my (mostly thriving) houseplants.
          <br />
          <br />
          Feel free to reach out if you want to chat about opportunities,
          collaborate on projects, or just say hi!
        </p>
      </div>

      {/* <>
        <div className="aboutMe__content">
          <h2 className="aboutMe__content-h2">What can i do?</h2>
          <div className="aboutMe__workBlock">
            {WORK_FLOW.map(({ id, title, content }) => (
              <div className="workBlock__wrapper">
                <div className="workBlock__wrapper-number">0{id}</div>
                <div className="workBlock__wrapper-content">
                  <h3>{title}</h3>
                  <p>{content}</p>
                </div>
                {id !== 3 && (
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYUlEQVR4nO3YvytGYRjG8a/flFCS+Y1ktbOTLEoZlNFgMCiTyT+AwaAYZDEQyWp4y4KSgSKUqLcYRInFr05d6mRBFu+5r0+dOs/9dIbrPud0nvOAmZmZmZmZmZmZWXGpAqoJ7BQ4BxoIKg+8AytACQG1Ag9qwgRBdQMvwCvQS1CTegoegS4CKgGW1IR7oJOAylJNeAYGCfokTAFvasQiUEdAPcCNmlAAxoHa7y4qBfZ1UbEea6k8jcCcvhDJ3NFPGnD4D0L85dj+kmkAeNLcJhm1oIBnQHOqPqa1QTI3D1SQQf0KmKwGW1I/SMuqJ3d/iIyqBK4UdFi1JmBHtUuggwwbUdA9jXPAhWq7X16HTDpW2D6gDbjWeBWoIeNyCnun8AWNZ/U1y7xRBc5rQyQ5n460JzCv0J9L3plI4RNbqcXPRrTwiQOFPwHqCWgduAXaCao8+na4mZmZmZmZmZmZ8WsfcgWu+h8Ra8YAAAAASUVORK5CYII="></img>
                )}
              </div>
            ))}
          </div>
        </div>
      </> */}

      {/* <>
        <div className="aboutMe__content">
          <h2 className="aboutMe__content-h2">What people says?</h2>
          <div className="aboutMe__testimonials-Block">
            {testimonials.map(({ id, content, name, position, at }) => (
              <div
                className="testimonial__card"
                key={id}
              >
                <h2 className="testimonial__card_title">{name} | {position} at {at} 
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO2dy2rVUBiFVwmpgtWBvoPaiRcUHaoT30dErZc38NKBoOhQ8TKpD1DqBX0I6wPY6lDruL8EomghOW31ZO2Vf32QUQvJupy9czbJPoAxxhhjjDHGGGOMMcYYY7bBXgCLANYBBOlYA3CvvRYzMIvE4Lced53+8KwXEPyv44sLkLsA4QIMz90CQncBiOxtS7BWQPgeAUZIDeCVC5CTeofhewRIHn6wL9pww3cBRhL+0oSQ+/5uRv7JX2r/zwVIHH6DC5A4/AYXIHH4DS5A4vAbXIDE4Te4AInDb3ABEoff4AIkDr/IAswDWACwAmAVwI9dLmWyj7UpPV+33RW+7YRfVAHOAnhXQHAlP19X/+fwiyjALIBHADYLCGtaI0Gp4dMLcAjA+wJCKr0A9ZTCpxZgNkH4AeB2weFTC/CogHCm/cm/A2BPweHTCnB2wpzfPCJ9HcBxAPuQk3qA8GkF6Lvbf5449KHDpxRgvuekzwDMIDf1gOFTCrDQM+zPITf1wOFTCrDSccJmzs9MTQifUoBPHSc8hrzUpPApBdjoOGHW4b8C8IIUPqUAlK8dhVKRw+96K/nzFM/nAhQw7E96K/lfVy978QiAYsLf+lby/1i9nEj2AlQFDPtUMhegyh5+5gJUDj9vASqHn7cAlcPPW4DK4ectQOXw8xagcvh5C1A5/LwFqAdY4ftzU2nJzZ3HWoB6oOXdRfXNncdYgGrAYX9dfXPnsRWgGnjOl/dPXgD5hi/U/ZMXQL7bD3X/5AWQv+qFun/yAgA8JYU/Cv/UBVwghj8G/+QFXCaGPwb/5AVcJIY/Bv/0BQB4vOXanwz4GJe8f/ICWs4DuATg3MDnlfdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPfve4eArD8evRMOdHj3DUL45+N3z4mOAqxCiJUOETfYFybArQ7vliHEtQ4RzY8eeBroZj+Arx3eXYEQR3tuZJoduGfYF1ggMwBe9vh2GGK8nVACjwR/f/L7wm+mVDnOANjsEdVMBzcBnExahrlW+62eYT9aD09BlIc9wnxgWx7chzDN5spvHDZ2W/YPAGYhzkEA71wC7DT8t613o6AZCR5MuCfwgd9z/v0Bt6YflNMAXjts9N3ty97w7YQjAK62q1sfAWwkLMVGq325XeSR+55vjDHGGGOMMcYYY4wxZlT8BGcgNVzRgy7uAAAAAElFTkSuQmCC" />
                </h2>
                <p className="testimonial__card__content">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </> */}
    </div>
  );
};

export default AboutMe;
