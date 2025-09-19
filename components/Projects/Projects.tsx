import { getPostData } from "@/lib/posts";
import ProjectCard from "./ProjectCard";

export default async function Projects() {
  const projectData = await Promise.all([
    getPostData("posts/novus.md"),
    getPostData("posts/terrain.md"),
    getPostData("posts/aerohub.md"),
    getPostData("posts/updog.md"),
  ]);

  const webdev = [
    {
      title: "Aerohub",
      imageUrl: "/images/aerohub2.png",
      contentHtml: projectData[2].contentHtml,
    },
  ];

  const gamedev = [
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
      title: "Up Dog",
      imageUrl: "/images/updog.png",
      contentHtml: projectData[3].contentHtml,
    },
  ];

  return (
    <div className="w-2/3 xl:w-1/2 flex flex-col justify-self-center py-28">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
        Projects
        <div className="bg-white text-white mt-4 w-full h-1"></div>
      </div>
      <div className="text-lg md:text-xl lg:text-2xl text-white mb-8">
        A highlight of things I've worked on in the past :)
        <br />
        Some of the source code can be found on my {" "}
        <a
          className="hover:underline text-teal-400"
          href="https://github.com/yalkhayyat"
          target="_blank"
        >
          Github
        </a>
        .
      </div>

      <div className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4">
        Web Development
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
        {webdev.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            contentHtml={project.contentHtml}
          />
        ))}
      </div>

      <div className="text-2xl md:text-3xl lg:text-4xl text-white font-semibold mb-4">
        Game Development
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 w-full ">
        {gamedev.map((project, index) => (
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
