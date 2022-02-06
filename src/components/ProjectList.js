import ProjectDetail from './ProjectDetail';
import './ProjectList.css'

const projects = [
  {
    id: 1,
    name: "Youtube clone",
    description: "Search for videos like on youtube",
    link: "https://youtube-clone-drab-zeta.vercel.app/",
  },
  {
    id: 2,
    name: "Wedding invitation",
    description: "A wedding invitation website",
    link: "https://www.alovestory.xyz",
  },
  {
    id: 3,
    name: "Hotel App",
    description: "A beach resort app",
    link: "https://hotel-beach-app.netlify.app/",
  },
  {
    id: 4,
    name: "Todo List",
    description: "A Todo app",
    link: "https://victor-todoapp.netlify.app/",
  },
];

const ProjectList = () => {
    return (
        <div className="project-list">
            <h1>Projects</h1>
            {projects.map(project => <ProjectDetail key={project.id} project={project} /> )}
        </div>
    )
}

export default ProjectList