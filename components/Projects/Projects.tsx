import { getPostData } from "@/lib/posts";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const projectData = await Promise.all([
    getPostData("posts/novus.md"),
    getPostData("posts/terrain.md"),
    getPostData("posts/aerohub.md"),
    getPostData("posts/updog.md"),
  ]);

  const projects = [
    {
      title: "NOVUS Flight Simulator",
      imageUrl: "/images/novus.webp",
      contentHtml: projectData[0].contentHtml,
    },
    {
      title: "Global Terrain Generator",
      imageUrl: "/images/terrain.png",
      contentHtml: projectData[1].contentHtml,
    },
    {
      title: "Aerohub",
      imageUrl: "/images/aerohub.png",
      contentHtml: projectData[2].contentHtml,
    },
    {
      title: "Up Dog",
      imageUrl: "/images/updog.png",
      contentHtml: projectData[3].contentHtml,
    },
  ];

  return (
    <div className="w-2/3 xl:w-1/2 flex flex-col justify-self-center py-28">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Projects
      </div>
      <div className="text-lg md:text-xl lg:text-2xl text-white mb-8">
        Some things I've worked on in the past :)
        <br />
        For the source code, visit my{" "}
        <a
          className="hover:underline text-teal-400"
          href="https://github.com/yalkhayyat"
          target="_blank"
        >
          Github
        </a>
        .
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 w-full ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            contentHtml={project.contentHtml}
          />
        ))}
      </div>
    </div>
  );
}
