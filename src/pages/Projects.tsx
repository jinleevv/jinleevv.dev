import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Footer from "@/features/Footer";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { RiGithubFill } from "react-icons/ri";

const projects = [
  {
    path: "/DRSIMON.png",
    name: "Domain-wise Rewrite for Segment-Informed Medical Oversight Network",
    description:
      "DR.SIMON is a lightweight query-rewriting framework that first segments medical videos into coarse events, then transforms user queries into visually explicit paraphrases using a frozen video-language backbone, and finally grounds those paraphrases to the most relevant video segments. Evaluated on MedVidCL, it delivers significant gains over recent video-LLMs without any additional training, showing that fixing lexical misalignment alone can greatly improve temporal grounding in medical videos.",
    link: "https://drsimon-rewrite.github.io/",
    github: "https://github.com/drsimon-rewrite/DR.SIMON",
  },
  {
    path: "/Booky.png",
    name: "Booky",
    description:
      "Booky is scheduling platform enabling users to effortlessly organize meetings with integrated Zoom scheduling, automated availability matching, and collaborative meeting-minute management, achieving 130+ active users.",
    link: "",
    github: "https://github.com/jinleevv/Booky",
  },
  {
    path: "/FinanceManagementSystem.png",
    name: "Finance Management System",
    description:
      "Finance Management System is a system designed to streamline monthly closing processes for corporate finance departments. It successfully processed and managed over 6,000 corporate card transactions along with their associated receipt images, ensuring smooth and accurate month-end closing operations.",
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
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const initialFilter = isMobile
    ? "drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.15))"
    : "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25))";

  return (
    <section className="h-screen w-screen font-jost">
      <div className="flex justify-center w-10/12 md:w-full md:px-44 py-6 md:py-[76px] mx-auto">
        <div
          className="flex w-full justify-start cursor-pointer my-auto"
          onClick={() => navigate("/")}
        >
          <Label className="cursor-pointer">Jin Won Lee</Label>
        </div>
        <div className="flex w-full justify-end gap-2">
          <Button
            variant="ghost"
            className="bg-white rounded-2xl"
            onClick={() => navigate("/")}
          >
            <ArrowLeft /> Back
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
        }}
        className="flex flex-col w-full items-center space-y-5 md:space-y-10 mb-12 p-2 md:p-0"
      >
        {projects.map((project, index) => {
          const displayName =
            isMobile && index === 0 ? "DR.SIMON" : project.name;
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }
            w-full max-h-[600px] md:w-3/4 border rounded-3xl shadow-lg bg-zinc-50`}
            >
              {/* Text Section */}
              <div className="w-full md:w-3/4 px-10 py-7 md:p-10 flex flex-col justify-center">
                <Label className="text-4xl font-bold text-black leading-none">
                  {displayName}
                </Label>
                <Label className="mt-2 text-sm font-light">
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
                      <LuExternalLink />
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
              <div className="flex items-center justify-center w-full overflow-hidden rounded-3xl p-2 md:p-0">
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

      <Footer />
    </section>
  );
}
