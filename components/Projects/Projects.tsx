import ProjectCard from "./ProjectCard";

export default function Projects() {
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
        >
          Github
        </a>
        .
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 w-full ">
        <ProjectCard
          title={"NOVUS Flight Simulator"}
          imageUrl={"/images/novus.webp"}
          markdownPath={"/ProjectDescriptions/novus.md"} // Example Markdown content
        />
        <ProjectCard
          title={"Global Terrain Generator"}
          imageUrl={"/images/terrain.png"}
          markdownPath={"/ProjectDescriptions/terrain.md"} // Example Markdown content
        />
        <ProjectCard
          title={"Aerohub"}
          imageUrl={"/images/aerohub.png"}
          markdownPath={"/ProjectDescriptions/aerohub.md"} // Example Markdown content
        />
        <ProjectCard
          title={"Up Dog"}
          imageUrl={"/images/updog.png"}
          markdownPath={"/ProjectDescriptions/updog.md"} // Example Markdown content
        />
      </div>
    </div>
  );
}
