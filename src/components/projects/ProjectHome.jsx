import { projectData } from "@/data/projecrdata";
import ProjectCard from "./ProjectCard";

const ProjectHome = () => {
  const data = projectData();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {data.map((item) => (
        <ProjectCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProjectHome;
