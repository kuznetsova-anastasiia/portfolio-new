import Header from "@/components/header";
import ContactList from "@/components/lists/contactList";
import MainInfoList from "@/components/lists/mainInfoList";

export default function Home() {
  return (
    <div className="Home">
      <Header />
      <div className="Home__content">
        <div className="Home__block">
          <div className="Home__block-info">
            <h2 className="Home__subtitle">Hello👋🏻,</h2>
            <h2 className="Home__subtitle">I'm Anastasiia Kuznetsova</h2>
            <h1 className="Home__title">Full-stack Developer</h1>
            <ContactList />
          </div>
          <MainInfoList />
        </div>

        <div className="Home__block">
          about/skills
        </div>

        <div className="Home__block">
          projects
        </div>

        <div className="Home__block">
          contact
        </div>
      </div>
    </div>
  );
}
