import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "@/features/Footer";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

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
        className="flex flex-col w-full justify-center items-center space-y-1 md:space-y-3 mb-12"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`grid md:flex border w-3/4 rounded-3xl shadow-lg bg-zinc-50 mb-10 ${
              index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {/* Text Section */}
            <div className="w-full md:w-3/4 px-10 py-7 md:p-10 flex flex-col justify-center">
              <Label className="text-4xl font-bold text-black leading-none">
                {project.name}
              </Label>
              <Label className="mt-2 text-sm font-light">
                {project.description}
              </Label>
            </div>

            {/* Image Section */}
            <div className="flex items-center justify-center w-full overflow-hidden p-2 md:p-0">
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
                  index % 2 !== 0 ? "md:mr-32 2xl:mr-44" : "md:ml-32 2xl:ml-44"
                }`}
              />
            </div>
          </div>
        ))}
      </motion.div>

      <Footer />
    </section>
  );
}
