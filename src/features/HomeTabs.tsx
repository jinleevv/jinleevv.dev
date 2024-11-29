import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const experienceInformation = [
  {
    company: "Ultium CAM",
    logo: "/ultium_cam_logo.jpeg",
    duration: "Dec 2023 - Present",
    position: "IT Intern",
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

export default function HomeTabs() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>("experience");
  return (
    <Tabs defaultValue="experience" className="mt-10 h-[350px]">
      <TabsList className="flex gap-2 text-sm font-medium bg-[#FDF7F0]">
        <TabsTrigger
          value="experience"
          className={`border ${
            selectedTab === "experience"
              ? "border-orange-500"
              : "border-orange-200"
          } hover:border-orange-500 focus:outline-none`}
          onClick={() => setSelectedTab("experience")}
        >
          Experience
        </TabsTrigger>
        <TabsTrigger
          value="projects"
          className={`border ${
            selectedTab === "projects"
              ? "border-orange-500"
              : "border-orange-200"
          } hover:border-orange-500 focus:outline-none`}
          onClick={() => setSelectedTab("projects")}
        >
          Projects
        </TabsTrigger>
        <TabsTrigger
          value="fun"
          className={`border ${
            selectedTab === "fun" ? "border-orange-500" : "border-orange-200"
          } hover:border-orange-500 focus:outline-none`}
          onClick={() => setSelectedTab("fun")}
        >
          Fun
        </TabsTrigger>
      </TabsList>
      <TabsContent value="experience" className="flex flex-col space-y-2">
        {experienceInformation.map((experience) => (
          <div
            key={experience.company}
            className="w-[550px] h-18 rounded-lg p-3 border border-orange-200"
          >
            <div className="flex gap-2">
              <Avatar className="w-10 h-10 rounded-md mt-auto mb-auto">
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
                <Label className="mt-auto mb-auto font-light text-sm">
                  {experience.position}
                </Label>
              </div>
            </div>
          </div>
        ))}
      </TabsContent>
      <TabsContent value="projects" className="grid grid-cols-1 gap-2">
        <div className="w-[400px] h-80 rounded-lg p-3 border border-orange-200">
          <img
            src="/akcsemcgill_project.png"
            className="h-2/3 w-full object-cover"
          />
          <div className="grid w-full text-right">
            <Label className="font-bold text-[16px]">
              AKCSE McGill Website
            </Label>
            <div className="flex w-full justify-end">
              <Label className="w-64 text-[10px] font-light text-right">
                It aims to provide an platform where members can be easily
                updated with AKCSE events.
              </Label>
            </div>
            <div className="flex w-full h-8 mt-2 justify-end">
              <Button
                variant="outline"
                className="w-1/4 h-7 focus:outline-none border-gray-200 hover:border-gray-200"
                onClick={() => navigate(`/AKCSE_McGill_Website`)}
              >
                Details <ArrowRight strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
