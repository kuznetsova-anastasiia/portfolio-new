import { LogoIcon } from "@/assets/icons";
import "./Header.scss";

export default function Header() {
    return (
        <div className="Header">
          <LogoIcon />

          <button className="Header__button">
            Home
          </button>
          <button className="Header__button">
            About/Skills
          </button>
          <button className="Header__button">
            Projects
          </button>
          <button className="Header__button-contact">
            Contact me
          </button>
        </div>
    )
}