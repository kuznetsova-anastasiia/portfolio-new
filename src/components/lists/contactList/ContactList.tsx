import { GitIcon, LinkedinIcon, MailIcon, TelegramIcon } from "@/assets/icons";
import "./ContactList.scss";

export default function ContactList() {
  return (
    <div className="ContactList">
      <button className="ContactList__button">
        <MailIcon />
      </button>
      <button className="ContactList__button">
        <GitIcon />
      </button>
      <button className="ContactList__button">
        <LinkedinIcon />
      </button>
      <button className="ContactList__button">
        <TelegramIcon />
      </button>
    </div>
  );
}
