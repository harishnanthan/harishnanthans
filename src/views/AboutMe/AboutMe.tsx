// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
import "./AboutMe.scss";
import { WORK_FLOW } from "../../constants";

const testimonials = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      '"High-skilled designer who creates novel experiences with ease and craft. His signature is more vivid on each new project he launches and this is only the start", "High-skilled designer who creates novel experiences with ease and craft. His signature is more vivid on each new project he launches and this is only the start", "High-skilled designer who creates novel experiences with ease and craft. His signature is more vivid on each new project he launches and this is only the start"',
    name: "Burno Arizo",
    position: "Product manager",
    at: "Tekion",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      '"High-skilled designer who creates novel experiences with ease and craft. His signature is more vivid on each new project he launches and this is only the start"',
    name: "Burno Arizo",
    position: "Product manager",
    at: "Tekion",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      '"High-skilled designer who creates novel experiences with ease and craft. His signature is more vivid on each new project he launches and this is only the start"',
    name: "Burno Arizo",
    position: "Product manager",
    at: "Tekion",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content:
      '"High-skilled designer who creates novel experiences with ease and craft. His signature is more vivid on each new project he launches and this is only the start"',
    name: "Burno Arizo",
    position: "Product manager",
    at: "Tekion",
  },
];

// const Accordion = ({ id, expanded, setExpanded, contents }) => {
//   const isOpen = id === expanded;
//   const { header, values } = contents;
//   return (
//     <>
//       <motion.header
//         initial={false}
//         onClick={() => setExpanded(isOpen ? false : id)}
//       >
//         {header}
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//             d="M11.9999 13.9394L17.4696 8.46973L18.5303 9.53039L11.9999 16.0607L5.46961 9.53039L6.53027 8.46973L11.9999 13.9394Z"
//             fill="#080341"
//           />
//         </svg>
//       </motion.header>
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.section
//             key="content"
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 },
//             }}
//             transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
//           >
//             <div className="accordion__tags-section">
//               {values.map(({ label, bgColor, color }) => (
//                 <span
//                   style={{
//                     backgroundColor: bgColor,
//                     color: color,
//                     display: "inline-block",
//                   }}
//                   className="accordion__tag"
//                 >
//                   {label}
//                 </span>
//               ))}
//             </div>
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

const AboutMe: React.FunctionComponent = () => {
  // const [expanded, setExpanded] = useState<false | number>(0);

  return (
    <div className="aboutMe__wrapper">
      <div className="aboutMe__content">
        <h2 className="aboutMe__content-h2">About Me</h2>
        <h3 className="aboutMe__content-h3">
          Hello, I'm Harish Nanthan, Full-Stack Developer from India.
        </h3>
        <p className="aboutMe__content-p">
          Ever since I wrote my first line of code, I've been captivated by the
          endless possibilities of technology. My journey as a full-stack
          developer began with a simple curiosity about how websites and apps
          work, which quickly grew into a passion for creating seamless digital
          experiences. Today, I specialize in building pixel-perfect frontends
          and developing efficient, scalable backends that solve real-world
          problems. During my two years at Tekion, I’ve had the opportunity to
          work on a range of innovative projects, from crafting user-friendly
          interfaces to designing complex backend architectures. Each project
          has been a learning experience, teaching me the importance of writing
          clean, maintainable code and the value of a pragmatic approach to
          problem-solving. I thrive on challenges that push me to think outside
          the box and develop creative solutions.
        </p>
      </div>

      {/* <>
        <div className="aboutMe__content">
          <h2 className="aboutMe__content-h2">What i know?</h2>
        </div>
        <div className="aboutMe__skillBlock">
          {SKILLS.map((contents) => (
            <Accordion
              id={contents.id}
              expanded={expanded}
              setExpanded={setExpanded}
              contents={contents}
            />
          ))}
        </div>
      </> */}

      <>
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
      </>

      <>
        <div className="aboutMe__content">
          <h2 className="aboutMe__content-h2">What people says?</h2>
          <div className="aboutMe__testimonials-Block">
            {testimonials.map(({ id, content, img, name, position, at }) => (
              <div
                className={`testimonial__card testimonial__card${id}`}
                key={id}
              >
                <div className="testimonial__card-border">
                  <p className="testimonial__card-card">{content}</p>
                  <div className="testimonial__card-who">
                    <img src={img} />
                    <div className="testimonial__card-who-is">
                      <h3>
                        {name}
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO2dy2rVUBiFVwmpgtWBvoPaiRcUHaoT30dErZc38NKBoOhQ8TKpD1DqBX0I6wPY6lDruL8EomghOW31ZO2Vf32QUQvJupy9czbJPoAxxhhjjDHGGGOMMcYYY7bBXgCLANYBBOlYA3CvvRYzMIvE4Lced53+8KwXEPyv44sLkLsA4QIMz90CQncBiOxtS7BWQPgeAUZIDeCVC5CTeofhewRIHn6wL9pww3cBRhL+0oSQ+/5uRv7JX2r/zwVIHH6DC5A4/AYXIHH4DS5A4vAbXIDE4Te4AInDb3ABEoff4AIkDr/IAswDWACwAmAVwI9dLmWyj7UpPV+33RW+7YRfVAHOAnhXQHAlP19X/+fwiyjALIBHADYLCGtaI0Gp4dMLcAjA+wJCKr0A9ZTCpxZgNkH4AeB2weFTC/CogHCm/cm/A2BPweHTCnB2wpzfPCJ9HcBxAPuQk3qA8GkF6Lvbf5449KHDpxRgvuekzwDMIDf1gOFTCrDQM+zPITf1wOFTCrDSccJmzs9MTQifUoBPHSc8hrzUpPApBdjoOGHW4b8C8IIUPqUAlK8dhVKRw+96K/nzFM/nAhQw7E96K/lfVy978QiAYsLf+lby/1i9nEj2AlQFDPtUMhegyh5+5gJUDj9vASqHn7cAlcPPW4DK4ectQOXw8xagcvh5C1A5/LwFqAdY4ftzU2nJzZ3HWoB6oOXdRfXNncdYgGrAYX9dfXPnsRWgGnjOl/dPXgD5hi/U/ZMXQL7bD3X/5AWQv+qFun/yAgA8JYU/Cv/UBVwghj8G/+QFXCaGPwb/5AVcJIY/Bv/0BQB4vOXanwz4GJe8f/ICWs4DuATg3MDnlfdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPdPXgCZUPfve4eArD8evRMOdHj3DUL45+N3z4mOAqxCiJUOETfYFybArQ7vliHEtQ4RzY8eeBroZj+Arx3eXYEQR3tuZJoduGfYF1ggMwBe9vh2GGK8nVACjwR/f/L7wm+mVDnOANjsEdVMBzcBnExahrlW+62eYT9aD09BlIc9wnxgWx7chzDN5spvHDZ2W/YPAGYhzkEA71wC7DT8t613o6AZCR5MuCfwgd9z/v0Bt6YflNMAXjts9N3ty97w7YQjAK62q1sfAWwkLMVGq325XeSR+55vjDHGGGOMMcYYY4wxZlT8BGcgNVzRgy7uAAAAAElFTkSuQmCC"></img>
                      </h3>
                      <p>
                        {position}, {at}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
};

export default AboutMe;
