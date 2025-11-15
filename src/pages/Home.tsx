import { Label } from "@/components/ui/label";
import { FaBuilding } from "react-icons/fa";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { IoIosSchool } from "react-icons/io";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Footer from "@/features/Footer";
import Projects from "./Projects";
import { LuExternalLink } from "react-icons/lu";

const expereince22 = [
  {
    title: "SDPlex, Inc",
    link: "http://www.sdplex.com/html/01_about.html",
    subtitle: "Software Engineer Intern",
    date: "May 2022 - Jul 2022",
    icon: <img src="/sdplex_logo.jpeg" className="rounded-lg w-12 h-12" />,
    oneliner: "",
  },
];
const expereince23 = [
  {
    title: "Flojoy",
    link: "https://www.flojoy.ai/",
    subtitle: "Software Engineer Intern",
    date: "May 2023 - Dec 2023",
    icon: <img src="/flojoy_logo.png" className="rounded-lg w-12 h-12" />,
    oneliner: "Accelerated $1.3M in seed funding",
  },
];
const expereince24_25 = [
  {
    title: "The Matter Lab @ UofT",
    link: "https://www.matter.toronto.edu/",
    subtitle: "AI Research Intern",
    date: "Aug 2025 - Present",
    icon: (
      <img src="/matter_lab_uoft_logo.jpeg" className="rounded-lg w-12 h-12" />
    ),
    oneliner: "El Agente Gráfico Team Member",
  },
  {
    title: "LG AI Research",
    link: "https://www.lgresearch.ai/",
    subtitle: "AI Engineer Intern",
    date: "Mar 2025 - May 2025",
    icon: <img src="/lg_ai_research.jpeg" className="rounded-lg w-12 h-12" />,
    oneliner: "Vision Lab - EXAONE 4.0 VL",
  },
  {
    title: "Ultium CAM",
    link: "https://www.ultiumcam.net/eng/main/getMain.do",
    subtitle: "Software Engineer Intern",
    date: "Dec 2023 - Feb 2025",
    icon: <img src="/ultium_cam_logo.jpeg" className="rounded-lg w-12 h-12" />,
    oneliner: "Server Management & Software Development",
  },
];

const experiencesByYear = [
  { year: "2024–2025", items: expereince24_25 },
  { year: "2023", items: expereince23 },
  { year: "2022", items: expereince22 },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center space-y-10 px-4 font-jost">
      <nav className="flex justify-between bg-white mx-auto w-full max-w-6xl py-4">
        <Button variant="ghost" className="bg-white">
          Jin Won Lee
        </Button>
        <a href="mailto:jinwon.lee@mail.mcgill.ca">
          <Button variant="ghost" className="bg-white">
            jinwon.lee@mail.mcgill.ca
          </Button>
        </a>
      </nav>
      <div className="w-full max-w-6xl mx-auto flex flex-col justify-center items-center space-y-3">
        <motion.div initial={{ opacity: 1 }}>
          <div className="w-full flex flex-col items-center justify-center">
            <img src="/jinleevv.png" className="w-64 h-64" />
            <Label className="mt-4 mb-2 text-3xl font-jost font-semibold">
              Jin Won Lee
            </Label>
          </div>

          <div className="mt-2 flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 text-sm">
            <div className="flex gap-1">
              <FaBuilding strokeWidth={1.25} size={16} />
              <Label className="m-auto">The Matter Lab @ UofT</Label>
            </div>
            <div className="flex gap-1">
              <IoIosSchool strokeWidth={1.25} size={20} />
              <Label className="m-auto">McGill University</Label>
            </div>
            <div className="flex gap-4">
              <a
                className="flex gap-1"
                href="https://www.linkedin.com/in/jinleevv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiLinkedinBoxFill size={20} className="text-black" />
                <Label className="m-auto text-black hover:text-gray-600 cursor-pointer">
                  LinkedIn
                </Label>
              </a>
              <a
                className="flex gap-1"
                href="https://github.com/jinleevv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiGithubFill size={20} className="text-black" />
                <Label className="m-auto text-black hover:text-gray-600 cursor-pointer">
                  Github
                </Label>
              </a>
            </div>
          </div>

          <div className="flex justify-center mt-4 mb-4">
            <Label className="mx-auto pt-6 md:py-0 text-center w-3/5 text-sm text-gray-700">
              I enjoy development, computer graphics and animations because it
              lets me be creative. When I’m not doing projects, I play music and
              shred the slopes :)
            </Label>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row w-full pt-4 mt-10 justify-center px-4 gap-4 lg:px-0 lg:ml-20"
        >
          <div className="w-1/6">
            <Label className="text-xl font-jost font-semibold">
              Experiences
            </Label>
          </div>
          <div className="flex w-full md:mt-6 lg:mt-0 lg:w-3/4 flex-col gap-4">
            {experiencesByYear.map(({ year, items }) => (
              <div key={year}>
                <Label className="text-md font-jost font-semibold italic mb-2">
                  {year}
                </Label>

                {items.map((exp, index) => (
                  <div
                    key={index}
                    className="flex w-full gap-3 space-y-3 items-start lg:ml-7"
                  >
                    <div className="z-10 mt-4">{exp.icon}</div>

                    <motion.div className="flex w-full md:w-3/4 lg:w-3/5 items-center gap-4 border border-gray-200 rounded-xl px-5 py-6">
                      <div className="flex flex-col w-full">
                        <div className="flex w-full justify-between">
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex gap-1"
                          >
                            <div className="text-md font-semibold text-gray-800">
                              {exp.title}
                            </div>
                            <LuExternalLink className="w-3 h-3 mt-1.5" />
                          </a>

                          <div className="hidden lg:block text-xs text-gray-500 mt-1">
                            {exp.date}
                          </div>
                        </div>
                        <div className="block lg:hidden text-sm text-gray-500 mt-1">
                          {exp.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {exp.subtitle}
                        </div>
                        {exp.oneliner && (
                          <ul className="list-disc list-inside text-sm text-gray-500">
                            <li>{exp.oneliner}</li>
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row w-full pt-4 mt-12 justify-center px-4 lg:px-0 lg:ml-20"
        >
          <div className="w-1/6">
            <Label className="text-xl font-jost font-semibold lg:-ml-20">
              Projects
            </Label>
          </div>
          <div className="flex w-full lg:w-3/4 flex-col gap-4 mt-7 lg:mt-14 lg:-ml-44">
            <Projects />
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
