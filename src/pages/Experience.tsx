import { motion } from "framer-motion";
import { useHook } from "@/hooks";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const experienceInformation = [
  {
    company: "Ultium CAM",
    logo: "/ultium_cam_logo.jpeg",
    duration: "Dec 2023 - Present",
    position: "Software Engineer Intern",
  },
  {
    company: "Flojoy",
    logo: "/flojoy_logo.png",
    duration: "May 2023 - July 2023",
    position: "Software Engineer Intern",
  },
  {
    company: "SDPlex",
    logo: "/sdplex_logo.jpeg",
    duration: "May 2022 - July 2022",
    position: "Software Engineer Intern",
  },
];

export default function Experience() {
  const { currentTab } = useHook();

  return (
    <section className={`${currentTab !== "experience" ? "hidden" : ""}`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: currentTab === "experience" ? 1 : 0,
        }}
        transition={{
          duration: 1.5,
        }}
        className="space-y-2"
      >
        <Label className="text-white text-lg">Experiences</Label>
        {experienceInformation.map((experience) => (
          <div
            key={experience.company}
            className="w-[550px] h-18 rounded-lg p-3 border text-white"
          >
            <div className="flex gap-2">
              <Avatar className="w-14 h-14 rounded-md mt-auto mb-auto">
                <AvatarImage
                  src={experience.logo}
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>{experience.company}</AvatarFallback>
              </Avatar>
              <div className="w-full grid font-normal">
                <div className="w-full flex justify-between">
                  <Label className="font-bold text-[16px]">
                    {experience.company}
                  </Label>
                  <Label className="mt-auto mb-auto font-light text-xs">
                    {experience.duration}
                  </Label>
                </div>
                <Label className="-mt-3 mb-auto font-light text-sm">
                  {experience.position}
                </Label>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

