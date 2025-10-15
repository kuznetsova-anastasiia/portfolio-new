import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <aside className="Sidebar">
      <div className="Sidebar__content">
        {/* Logo */}
        <div className="Sidebar__logo">
          <span className="Sidebar__logo-text">Anastasiia Kuznetsova</span>
        </div>

        {/* Navigation */}
        <nav className="Sidebar__nav">
          <a
            href="#home"
            className="Sidebar__nav-item Sidebar__nav-item--active"
          >
            <div className="Sidebar__nav-icon">🏠</div>
            <span>Home</span>
          </a>
          <a href="#projects" className="Sidebar__nav-item">
            <div className="Sidebar__nav-icon">💼</div>
            <span>Projects</span>
          </a>
          <a href="#about" className="Sidebar__nav-item">
            <div className="Sidebar__nav-icon">👤</div>
            <span>About</span>
          </a>
        </nav>

        {/* Profile Section */}
        <div className="Sidebar__buttons">
          <a href="mailto:anastasiia.kzntsva@gmail.com">
            <button className="Sidebar__contact-btn">📥 Contact me</button>
          </a>
          <a href="/resume.pdf" download="Anastasiia_Kuznetsova_CV_Fullstack.pdf">
            <button className="Sidebar__resume-btn">📄 Resume</button>
          </a>
        </div>
      </div>
    </aside>
  );
}
