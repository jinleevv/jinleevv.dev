import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BriefcaseBusiness, School } from "lucide-react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import HomeTabs from "@/features/HomeTabs";
import DisplayName from "@/features/DisplayName";
import Experience from "./Experience";
import { motion } from "framer-motion";
import { useHook } from "@/hooks";
import Projects from "./Projects";

export default function Home() {
  const { currentTab } = useHook();

  return (
    <section className="h-screen w-screen bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentTab === "home" ? 1 : 0,
            display: currentTab === "home" ? "block" : "none",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src="/profile.jpg"
                className="w-full h-full object-cover"
              />
              <AvatarFallback>JW</AvatarFallback>
            </Avatar>

            <DisplayName />
          </div>

          <div className="mt-2 flex gap-6 text-sm">
            <div className="flex gap-1 text-white">
              <BriefcaseBusiness strokeWidth={1.25} size={20} />
              <Label className="m-auto">Ultium CAM</Label>
            </div>
            <div className="flex gap-1 text-white">
              <School strokeWidth={1.25} size={20} />
              <Label className="m-auto">McGill University</Label>
            </div>
            <a className="flex gap-1 text-white hover:text-gray-300">
              <RiLinkedinBoxFill size={20} />
              <Label className="m-auto">LinkedIn</Label>
            </a>
            <a className="flex gap-1 text-white hover:text-gray-300">
              <RiGithubFill size={20} />
              <Label className="m-auto">Github</Label>
            </a>
          </div>

          <div className="grid mt-4 space-y-1">
            <Label className="text-center max-w-lg text-sm text-gray-400">
              I enjoy development and 3D modeling because it lets me be
              creative.
            </Label>{" "}
            <Label className="text-center max-w-lg text-sm text-gray-400">
              When I’m not doing projects, I play music and shred the slopes :)
            </Label>
          </div>
        </motion.div>
        <Experience />
        <Projects />
      </div>

      <div className="absolute bottom-32 sm:bottom-32 md:bottom-44 lg:bottom-72 left-0 w-full flex justify-center z-20">
        <HomeTabs />
      </div>
    </section>
  );
}
