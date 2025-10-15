import { MailIcon, LinkedinIcon, GitIcon, TelegramIcon } from "@/assets/icons";
import "./Contact.scss";

export default function Contact() {
  const contactLinks = [
    {
      href: "mailto:anastasiia.kzntsva@gmail.com",
      icon: MailIcon,
      text: "anastasiia.kzntsva@gmail.com",
    },
    {
      href: "https://www.linkedin.com/in/anastasiia-kuznetsova-fullstack/",
      icon: LinkedinIcon,
      text: "LinkedIn",
    },
    {
      href: "https://github.com/kuznetsova-anastasiia",
      icon: GitIcon,
      text: "GitHub",
    },
    {
      href: "https://t.me/kzntsva_ana",
      icon: TelegramIcon,
      text: "Telegram",
    },
  ];

  return (
    <section className="Contact">
      <h2 className="Contact__title">Get In Touch</h2>
      <div className="Contact__content">
        <p className="Contact__text">
          Ready to work together? Let's discuss opportunities!
        </p>
        <div className="Contact__links">
          {contactLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className="Contact__link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent />
                <span>{link.text}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
