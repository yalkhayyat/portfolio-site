import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const languages = [
    "C/C++",
    "Javascript",
    "Python",
    "Lua",
    "Typescript",
    "SQL",
    "Java",
    "HTML/CSS",
  ];

  const technologies = [
    "React",
    "Next.js",
    "Flask",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Supabase",
    "Docker",
    "Tailwind CSS",
  ];

  return (
    <div className="hidden fixed xl:flex flex-col gap-10 w-56 top-20 px-6">
      {/* Contact Section */}
      <div className="space-y-2 z-10">
        <h2 className="text-2xl text-teal-400 font-bold ">Contact</h2>
        <Link
          target="_blank"
          href="mailto:yalkhayy@gmail.com"
          className="text-lg text-white hover:underline z-50"
        >
          yalkhayy@gmail.com
        </Link>
      </div>

      {/* Links Section */}
      <div className="space-y-2 z-10">
        <h2 className="text-2xl text-teal-400 font-bold ">Links</h2>
        <Link
          target="_blank"
          href="https://github.com/yalkhayyat"
          className="text-lg text-white hover:underline z-50"
        >
          github.com/yalkhayyat
        </Link>
        <br />
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/yalkhayyat/"
          className="text-lg text-white hover:underline z-50"
        >
          linkedin.com/in/yalkhayyat
        </Link>
      </div>

      {/* Languages Section */}
      <div className="space-y-2">
        <h2 className="text-2xl text-teal-400 font-bold ">Languages</h2>
        <div className="flex flex-wrap gap-2">
          {languages.map((language) => (
            <span
              key={language}
              className="bg-teal-400/10 text-teal-400 text-sm px-2 py-1 rounded-full"
            >
              {language}
            </span>
          ))}
        </div>
      </div>

      {/* Technologies Section */}
      <div className="space-y-2">
        <h2 className="text-2xl text-teal-400 font-bold ">Technologies</h2>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-teal-400/10 text-teal-400 text-sm px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Resume Button */}
      <Link
        href="/Yousif_Alkhayyat_resume.pdf"
        target="_blank"
        className="inline-flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-black px-4 py-2 rounded-lg transition-colors z-50"
      >
        <ExternalLink size={16} />
        <span className="text-sm font-medium">Resume</span>
      </Link>
    </div>
  );
}
