import "./Hero.scss";
import textbook from "/images/me.png";

export default function Hero() {
  return (
    <section className="Hero">
      <div className="Hero__content">
        <h1 className="Hero__title">Hi, I'm a Full-Stack Developer!</h1>
        <p className="Hero__description">
          I build web and mobile applications with modern technologies and
          clean, user-friendly designs.
        </p>
        <div className="Hero__icons">
          <div className="Hero__icon">⚙️</div>
          <div className="Hero__icon">💻</div>
        </div>
      </div>
      <div className="Hero__illustration">
        <img
          src={textbook}
          alt="Hero Illustration"
          className="Hero__image"
        />
      </div>
    </section>
  );
}
