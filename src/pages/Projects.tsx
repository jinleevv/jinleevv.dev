import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const projects = [
  {
    path: "/Booky.png",
    name: "Booky",
    description:
      "Booky is scheduling platform enabling users to effortlessly organize meetings with integrated Zoom scheduling, automated availability matching, and collaborative meeting-minute management, achieving 130+ active users.",
  },
  {
    path: "/FinanceManagementSystem.png",
    name: "Finance Management System",
    description:
      "Finance Management System is a system designed to streamline monthly closing processes for corporate finance departments. It enables users to efficiently manage and track corporate card transactions and associated receipt images, ensuring smooth month-end closing operations.",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <section className="h-screen w-screen font-jost">
      <div className="flex w-full py-[72px] px-44">
        <div
          className="flex w-full justify-start cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Label className="cursor-pointer">Jin Won Lee</Label>
        </div>
        <div className="flex w-full justify-end gap-2">
          <Button
            variant="ghost"
            className="bg-white"
            onClick={() => navigate("/blog")}
          >
            Blog
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
        className="flex flex-col w-full justify-center items-center space-y-3 pb-10"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex border w-3/4 rounded-3xl shadow-lg bg-zinc-50 mb-10 ${
              index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Text Section */}
            <div className="w-3/4 p-10 flex flex-col justify-center">
              <Label className="text-4xl font-bold text-black leading-none">
                {project.name}
              </Label>
              <Label className="mt-2 text-sm font-light">
                {project.description}
              </Label>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center w-full h-full overflow-hidden">
              <motion.img
                src={project.path}
                alt={project.name}
                initial={{
                  scale: 1,
                  filter: "drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.25))",
                }}
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" },
                  filter: "drop-shadow(6px 6px 8px rgba(0, 0, 0, 0.25))",
                }}
                className={`w-full h-auto mt-10 max-w-none rounded-lg object-cover ${
                  index % 2 !== 0 ? "mr-32 2xl:mr-44" : "ml-32 2xl:ml-44"
                }`}
              />
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
