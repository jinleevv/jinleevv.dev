import { Label } from "@/components/ui/label";
import { BriefcaseBusiness, School } from "lucide-react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import Experience from "./Experience";
import { motion } from "framer-motion";
import Projects from "./Projects";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    title: "SDPlex, Inc",
    subtitle: "Software Engineer Intern",
    date: "May 2022 - July 2022",
    icon: (
      <img
        src="/sdplex_logo.jpeg"
        className="rounded-2xl w-10 h-10 border-1 border-black"
      />
    ),
  },
  {
    title: "Flojoy",
    subtitle: "Software Engineer Intern",
    date: "May 2023 - Dex 2023",
    icon: (
      <img
        src="/flojoy_logo.png"
        className="rounded-2xl w-10 h-10 border-[1px] border-gray-200"
      />
    ),
  },
  {
    title: "Ultium CAM",
    subtitle: "Software Engineer Intern",
    date: "Dec 2023 - Feb 2025",
    icon: (
      <img
        src="/ultium_cam_logo.jpeg"
        className="rounded-2xl w-10 h-10 border-[1px] border-gray-200"
      />
    ),
  },
  {
    title: "LG AI Research",
    subtitle: "Computer Vision Document Data Engineer Intern",
    date: "Mar 2025 - Present",
    icon: (
      <img
        src="/lg_ai_research.jpeg"
        className="rounded-2xl w-10 h-10 border-[1px] border-gray-200"
      />
    ),
  },
];

export default function Home() {
  return (
    <section className="h-screen w-screen font-jost">
      <div className="flex w-full mt-2 justify-end gap-2 px-32">
        <Button variant="ghost" className="bg-white">
          Projects
        </Button>
        <Button variant="ghost" className="bg-white">
          Blog
        </Button>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <motion.div initial={{ opacity: 1 }}>
          <div className="w-full flex flex-col items-center justify-center">
            <img src="/jinleevv.png" className="w-64 h-64" />
            <Label className="mt-4 mb-2 text-3xl font-jost font-semibold">
              Jin Won Lee
            </Label>
          </div>

          <div className="mt-2 flex justify-center gap-6 text-sm">
            <div className="flex gap-1">
              <BriefcaseBusiness strokeWidth={1.25} size={20} />
              <Label className="m-auto">LG AI Research</Label>
            </div>
            <div className="flex gap-1">
              <School strokeWidth={1.25} size={20} />
              <Label className="m-auto">McGill University</Label>
            </div>
            <a
              className="flex gap-1"
              href="https://www.linkedin.com/in/jinleevv/"
              target="_blank"
            >
              <RiLinkedinBoxFill size={20} className="text-black" />
              <Label className="m-auto text-black hover:text-gray-600">
                LinkedIn
              </Label>
            </a>
            <a
              className="flex gap-1 hover:text-gray-300"
              href="https://github.com/jinleevv"
              target="_blank"
            >
              <RiGithubFill size={20} className="text-black" />
              <Label className="m-auto text-black hover:text-gray-600">
                Github
              </Label>
            </a>
          </div>

          <div className="grid mt-4 space-y-1">
            <Label className="text-center max-w-2xl text-sm text-gray-400">
              I enjoy development, computer graphics and animations because it
              lets me be creative.
            </Label>{" "}
            <Label className="text-center max-w-lg text-sm text-gray-400">
              When I’m not doing projects, I play music and shred the slopes :)
            </Label>
          </div>
        </motion.div>

        <div className="mt-10 w-2/3 h-2 border-b-[1px] border-black"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex w-full mt-10 justify-center"
        >
          <div className="flex gap-8 px-4 md:px-10 py-6 min-w-[600px]">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center min-w-[200px] group"
              >
                <div className="z-10 p-3 bg-transparent rounded-full group-hover:scale-110 transition">
                  {exp.icon}
                </div>
                <div className="mt-2 text-sm font-semibold text-gray-800">
                  {exp.title}
                </div>
                <div className="text-xs text-gray-500">{exp.subtitle}</div>
                <div className="text-[10px] text-gray-400 mt-1">{exp.date}</div>

                {/* Connector line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute top-5 left-full h-[2px] w-8 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
