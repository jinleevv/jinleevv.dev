import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { RiGithubFill } from "react-icons/ri";

const projects = [
  {
    path: "/DRSIMON.png",
    name: "DR.SIMON - Best Paper Award",
    description:
      "DR.SIMON is a lightweight query-rewriting framework that first segments medical videos into coarse events, then transforms user queries into visually explicit paraphrases using a frozen video-language backbone, and finally grounds those paraphrases to the most relevant video segments.",
    link: "https://drsimon-rewrite.github.io/",
    github: "https://github.com/drsimon-rewrite/DR.SIMON",
  },
  {
    path: "/Booky.png",
    name: "Booky",
    description:
      "Booky is scheduling platform enabling users to effortlessly organize meetings with integrated Zoom scheduling, automated availability matching, and collaborative meeting-minute management, achieving 160+ active users.",
    link: "",
    github: "https://github.com/jinleevv/Booky",
  },
  {
    path: "/FinanceManagementSystem.png",
    name: "Finance Management System",
    description:
      "Finance Management System is a system designed to streamline monthly closing processes for corporate finance departments. It successfully processed and managed over 12,000 transactions records along with their associated receipt images, ensuring smooth and accurate month-end closing operations.",
    link: "",
    github: "https://github.com/jinleevv/finance-management-system",
  },
  {
    path: "/akcse.png",
    name: "AKCSE McGill",
    description:
      "AKCSE McGill is a website that students within the student body collaboratively create. The website serves as a space where individuals can be informed about events, initiatives, and updates within AKCSE; this platform also offers hands-on experiences for members to gain learning opportunities through web development and GitHub Collaboration both within and outside the club.",
    link: "https://akcsemcgill.ca",
    github: "https://github.com/jinleevv/akcse",
  },
];

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);
  return isMobile;
}

export default function Projects() {
  const isMobile = useIsMobile();

  const initialFilter = isMobile
    ? "drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.15))"
    : "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25))";

  return (
    <div className="min-h-screen w-full flex flex-col justify-center space-y-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="grid grid-cols-1 gap-8 w-full max-w-6xl mx-auto mb-12 p-2 md:p-0"
      >
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }
            max-h-[500px] border rounded-3xl shadow-sm`}
            >
              {/* Text Section */}
              <div className="w-full md:w-3/4 px-7 py-7 md:p-10 flex flex-col justify-center">
                <Label className="text-md font-bold text-black leading-none">
                  {project.name}
                </Label>
                <Label className="mt-2 text-sm text-gray-500">
                  {project.description}
                </Label>
                <div className="flex w-full justify-end mt-5 gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-600 hover:text-black"
                    >
                      <LuExternalLink className="w-4 h-4 mt-0.5" />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-800 hover:text-black"
                    >
                      <RiGithubFill />
                    </a>
                  )}
                </div>
              </div>

              {/* Image Section */}
              <div className="hidden md:flex items-center justify-center w-full overflow-hidden rounded-3xl">
                <motion.img
                  src={project.path}
                  alt={project.name}
                  initial={{
                    scale: 1,
                    filter: initialFilter,
                  }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3, ease: "easeOut" },
                    filter: "drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.25))",
                  }}
                  className={`w-full h-auto md:mt-10 max-w-none rounded-2xl object-cover ${
                    index % 2 !== 0
                      ? "md:mr-32 2xl:mr-44"
                      : "md:ml-32 2xl:ml-44"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
