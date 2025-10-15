import "./Header.scss";

export default function Header() {
  return (
    <header className="Header">
      {/* <div className="Header__search">
        <div className="Header__search-icon">🔍</div>
        <input
          type="text"
          placeholder="Search"
          className="Header__search-input"
        />
      </div> */}
      <div className="Header__user-profile">
        <div className="Header__user-avatar">👩🏼‍💻</div>
        <span className="Header__user-name">Anastasiia Kuznetsova</span>
      </div>
    </header>
  );
}
