import { useState } from "react";
import "./Projects.scss";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  href: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects: Project[] = [
    {
      id: 1,
      title: "Next Level Party",
      description:
        "This website is a platform for Next Level Dance competition in Odessa, Ukraine. It allows users to view all the information about the competition, submit their applications for participation, and view the results of the competition. Submissions are still open ;)",
      category: "Commercial",
      image: "/images/next-level.jpg",
      technologies: ["Next.js", "TypeScript", "Prisma", "SCSS", "MongoDB"],
      href: "https://www.next-level-party.site/",
    },
    {
      id: 2,
      title: "Clickaroo AI",
      description:
        "Clickaroo AI is a platform that allows users to create AI-powered clickbait headlines for their social media posts, viral TikTok scenarios, and more.",
      category: "Commercial",
      image: "/images/clickaroo.jpg",
      technologies: ["React", "Nest.js", "TypeScript", "MongoDB", "Stripe"],
      href: "https://app.clickarooai.com/",
    },
    {
      id: 3,
      title: "Movies Entertainment App",
      description:
        "The Movies Entertainment App is a full-stack movie and TV series entertainment application. With this app, users can easily find a movie or TV series, watch a trailer, leave a comment, and add it to their bookmarks.",
      category: "Pet-projects",
      image: "/images/movies-app.jpg",
      technologies: ["Next.js", "tRPC", "Prisma", "TailwindCSS", "Supabase"],
      href: "https://github.com/ThreeTriumphCoders/movies-entertainment-app",
    },
    {
      id: 4,
      title: "Nice Store",
      description:
        "Nice Store is platform that offers a wide range of gadgets for tech enthusiasts. Our goal is to provide an enjoyable shopping experience where users can explore and purchase their favorite gadgets with ease.",
      category: "Pet-projects",
      image: "/images/nice-store.jpg",
      technologies: ["React", "TypeScript", "SCSS", "PostgreSQL", "Node.js", "Clerk"],
      href: "https://github.com/SolBingers/nice_store",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="Projects" id="projects">
      {/* Project Filters */}
      <div className="Projects__filters">
        <button
          className={`Projects__filter-btn ${
            activeFilter === "All" ? "Projects__filter-btn--active" : ""
          }`}
          onClick={() => setActiveFilter("All")}
        >
          All
        </button>
        <button
          className={`Projects__filter-btn ${
            activeFilter === "Commercial" ? "Projects__filter-btn--active" : ""
          }`}
          onClick={() => setActiveFilter("Commercial")}
        >
          Commercial
        </button>
        <button
          className={`Projects__filter-btn ${
            activeFilter === "Pet-projects"
              ? "Projects__filter-btn--active"
              : ""
          }`}
          onClick={() => setActiveFilter("Pet-projects")}
        >
          Pet-projects
        </button>
      </div>

      {/* Projects Title */}
      <h2 className="Projects__title">My Projects</h2>

      {/* Projects Grid */}
      <div className="Projects__grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="Projects__card" onClick={() => window.open(project.href, "_blank")}>
            <div className="Projects__icon">
              <img className="Projects__icon-img" src={project.image} alt={project.title} />
            </div>
            <h3 className="Projects__card-title">{project.title}</h3>
            <p className="Projects__description">{project.description}</p>
            <div className="Projects__tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="Projects__tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        <p className="Projects__more">and more... {";)"}</p>
      </div>
    </section>
  );
}
