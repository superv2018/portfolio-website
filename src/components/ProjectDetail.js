import './ProjectDetail.css'

const ProjectDetail = ({ project }) => {
  return (
    <div className="project-detail">
      <a href={project.link}>{project.name}</a>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail