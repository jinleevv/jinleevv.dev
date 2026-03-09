import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { LuExternalLink } from "react-icons/lu";
import { RiGithubFill } from "react-icons/ri";

const publications = [
  {
    authors: [
      "Jaeha Choi*",
      "Jin Won Lee*",
      "Siwoo You",
      "Jangho Lee",
    ],
    name: "It's Time to Get It Right: Improving Analog Clock Reading and Clock-Hand Spatial Reasoning in Vision-Language Models",
    description: "Accepted to CVPR 2026 Findings",
    github: "https://github.com/allchiever/It-s-Time-to-Get-It-Right",
    link: "https://it-s-time-to-get-it-right.github.io/",
  },
  {
    authors: [
      "Jiaru Bai",
      "Abdulrahman Aldossary",
      "Thomas Swanick",
      "Marcel Müller",
      "Yeonghun Kang",
      "Zijian Zhang",
      "Jin Won Lee",
      "Tsz Wai Ko",
      "Mohammad Ghazi Vakili",
      "Varinia Bernales",
      "Alán Aspuru-Guzik",
    ],
    name: "El Agente Gráfico: Structured Execution Graphs for Scientific Agents",
    github: "",
    link: "https://arxiv.org/abs/2602.17902",
  },
  {
    authors: ["Seohyun Lee", "Suhyun Choe*", "Jaeha Choi*", "Jin Won Lee*"],
    name: "DR.SIMON: Domain-Wise Rewrite for Segment-Informed Medical Oversight Network",
    description: "Best Paper Award at the MedAGI Workshop at MICCAI 2025",
    github: "https://drsimon-rewrite.github.io/",
    link: "https://link.springer.com/chapter/10.1007/978-3-032-07845-2_10",
  },
];

export default function Publications() {
  return (
    <div className="w-full flex flex-col justify-center space-y-10">
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
        {publications.map((publication, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }
            max-h-[500px] border rounded-3xl shadow-sm`}
            >
              <div className="w-full px-5 py-5 md:px-7 md:py-6 flex flex-col justify-center">
                <Label className="text-md font-bold text-black leading-none">
                  {publication.name}
                </Label>
                <div className="mt-1.5 text-sm text-gray-700 font-medium">
                  {publication.authors.map((author, i) => (
                    <span key={i}>
                      {author.includes("Jin Won Lee") ? (
                        <strong>{author}</strong>
                      ) : (
                        author
                      )}
                      {i < publication.authors.length - 1 ? ", " : ""}
                    </span>
                  ))}
                </div>
                {publication.description && (
                  <Label className="mt-1 text-sm text-gray-500">
                    {publication.description}
                  </Label>
                )}
                <div className="flex w-full justify-end mt-3 gap-3">
                  {publication.link && (
                    <a
                      href={publication.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-600 hover:text-black"
                    >
                      <LuExternalLink className="w-4 h-4 mt-0.5" />
                    </a>
                  )}
                  {publication.github && (
                    <a
                      href={publication.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-gray-800 hover:text-black"
                    >
                      <RiGithubFill />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
