"use client";

import ProjectCard from "../components/ProjectCard";

interface ProjectsProps {
  onSelectProject: (projectId: string) => void;
}

const projects = [
  {
    id: "cyber-copium",
    title: "Cyber Copium",
    description: "短链路情绪转译工具",
    tags: ["情绪AI", "微行动", "生成控制"],
    image: "/images/cyber-copium.jpg",
    demoUrl: "https://ziwei-app-gz.vercel.app/",
    githubUrl: "https://github.com/Gabriel2git/CyberCopium",
  },
  {
    id: "prompt-forge",
    title: "PromptForge",
    description: "Prompt结构化生成工具",
    tags: ["输入转译", "多轮追问", "生产力"],
    image: "/images/prompt-forge.jpg",
    demoUrl: "#",
    githubUrl: "https://github.com/Gabriel2git/PromptForge",
  },
  {
    id: "fate-pilot",
    title: "FatePilot",
    description: "AI紫微斗数解读工具",
    tags: ["复杂知识解释", "Persona分层", "AI对话"],
    image: "/images/fate-pilot.jpg",
    demoUrl: "https://ziwei-app-gz.vercel.app/",
    githubUrl: "https://github.com/Gabriel2git/FatePilot",
  },
];

export default function Projects({ onSelectProject }: ProjectsProps) {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 mb-4 text-center">
          Selected Projects
        </h2>
        <p className="text-zinc-500 text-center mb-12 max-w-2xl mx-auto">
          三个独立完成的AI产品项目，涵盖情绪AI、生产力工具和复杂知识解释场景
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              demoUrl={project.demoUrl}
              githubUrl={project.githubUrl}
              onDetailClick={() => onSelectProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
