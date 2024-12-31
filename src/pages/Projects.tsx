import { motion } from "framer-motion";
import { useHook } from "@/hooks";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const projects = [
  {
    path: "AKCSE_McGill_Website",
    logo: "/akcsemcgill_project.png",
    projectName: "AKCSE McGill Website",
    description:
      "It aims to provide an platform where members can be easily updated with AKCSE events.",
  },
  {
    path: "Booky",
    logo: "/booky_logo.png",
    projectName: "Booky",
    description:
      "It aims to provide an platform where people can organized the meetings more easily.",
  },
];

export default function Experience() {
  const { currentTab } = useHook();
  const navigate = useNavigate();

  return (
    <section className={`${currentTab !== "projects" ? "hidden" : ""}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: currentTab === "projects" ? 1 : 0,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <Label className="text-white text-lg">Projects</Label>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-[400px] h-80 rounded-lg p-3 border text-white"
            >
              <img
                src={project.logo}
                className="h-2/3 w-full object-cover bg-white rounded-lg"
                alt={project.projectName}
              />
              <div className="grid w-full text-right">
                <Label className="font-bold text-[16px]">
                  {project.projectName}
                </Label>
                <div className="flex w-full justify-end">
                  <Label className="w-64 text-[10px] font-light text-right">
                    {project.description}
                  </Label>
                </div>
                <div className="flex w-full h-8 mt-2 justify-end">
                  <Button
                    variant="outline"
                    className="w-1/4 h-7 focus:outline-none text-black border-gray-200 hover:border-gray-200"
                    onClick={() => navigate(`/${project.path}`)}
                  >
                    Details <ArrowRight strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

