import "./Contact.scss";

const Contact: React.FunctionComponent = () => {
  return (
    <div className="contact__wrapper fullWidth-withPadding">
      <div className="contact__content">
        <h2 className="contact__content-h2">let's connect!</h2>
        <p>"Ideas are like pizza 🍕 — better shared! Send me your thoughts."</p>
      </div>
      <div className="contact__wrapper-block">
      <form className="contact__form">
        <input className="input" type="email" placeholder="Email"/>
        <textarea className="input" placeholder="Why are you waiting?, Type something... 👀"/>
        <button type="submit">Send Message</button>
      </form>
     
      </div>
    </div>
  );
};

export default Contact;
