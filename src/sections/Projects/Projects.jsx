import styles from "../Projects/ProjectsStyles.module.css";
import pjms from "../../assets/ProjectManagementSystem.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle"> Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={pjms}
          link="https://github.com/noahkhant/Project-Management-System"
          h3="BigBrother360"
          p="Project Management System"
        />
      </div>
    </section>
  );
}

export default Projects;
