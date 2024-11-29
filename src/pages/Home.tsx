import { Label } from "../components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { BriefcaseBusiness, Github, School } from "lucide-react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

export default function Home() {
  return (
    <section className="h-screen w-screen bg-[#FDF7F0] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <Avatar className="w-32 h-32">
          <AvatarImage
            src="/src/assets/profile.jpg"
            className="w-full h-full object-cover"
          />
          <AvatarFallback>JW</AvatarFallback>
        </Avatar>

        <Label className="mt-4 text-2xl font-bold">Jin Won Lee</Label>

        <div className="mt-2 flex gap-4 text-sm">
          <div className="flex gap-1">
            <BriefcaseBusiness strokeWidth={1.25} size={20} />
            <Label className="m-auto">Ultium CAM</Label>
          </div>
          <div className="flex gap-1">
            <School strokeWidth={1.25} size={20} />
            <Label className="m-auto">McGill University</Label>
          </div>
          <a className="flex gap-1 text-black hover:text-gray-600">
            <RiLinkedinBoxFill size={20} />
            <Label className="m-auto">LinkedIn</Label>
          </a>
          <a className="flex gap-1 text-black hover:text-gray-600">
            <RiGithubFill size={20} />
            <Label className="m-auto">Github</Label>
          </a>
        </div>
        {/* Tagline */}
        <div className="grid mt-4 space-y-1">
          <Label className="text-center max-w-lg text-sm text-gray-600">
            I enjoy development and 3D modeling because it lets me be creative.
          </Label>{" "}
          <Label className="text-center max-w-lg text-sm text-gray-600">
            When I’m not doing projects, I play music and shred the slopes :)
          </Label>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="experience" className="mt-10">
        <TabsList className="flex gap-2 text-sm font-medium bg-[#FDF7F0]">
          <TabsTrigger
            value="experience"
            className="border border-orange-200 hover:border-orange-500 focus:outline-none"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="border border-orange-200 hover:border-orange-500 focus:outline-none"
          >
            Projects
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="border border-orange-200 hover:border-orange-500 focus:outline-none"
          >
            Skills
          </TabsTrigger>
          <TabsTrigger
            value="fun"
            className="border border-orange-200 hover:border-orange-500 focus:outline-none"
          >
            Fun
          </TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="flex flex-col space-y-2">
          <div className="w-[550px] h-18 rounded-lg p-3 border border-orange-200">
            <div className="flex gap-2">
              <Avatar className="w-10 h-10 rounded-md mt-auto mb-auto">
                <AvatarImage
                  src="/src/assets/ultium_cam_logo.jpeg"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>Ultium CAM</AvatarFallback>
              </Avatar>
              <div className="w-full grid font-normal">
                <div className="w-full flex justify-between">
                  <Label className="font-bold text-[16px]">Ultium CAM</Label>
                  <Label className="mt-auto mb-auto font-light text-xs">
                    Dec 2023 - Present
                  </Label>
                </div>
                <Label className="mt-auto mb-auto font-light text-sm">
                  IT Intern
                </Label>
              </div>
            </div>
          </div>
          <div className="w-[550px] h-18 rounded-lg p-3 border border-orange-200">
            <div className="flex gap-2">
              <Avatar className="w-10 h-10 rounded-md mt-auto mb-auto">
                <AvatarImage
                  src="/src/assets/flojoy_logo.png"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>Flojoy</AvatarFallback>
              </Avatar>
              <div className="w-full grid font-normal">
                <div className="w-full flex justify-between">
                  <Label className="font-bold text-[16px]">Flojoy</Label>
                  <Label className="mt-auto mb-auto font-light text-xs">
                    May 2023 - Dec 2023
                  </Label>
                </div>
                <Label className="mt-auto mb-auto font-light text-sm">
                  Software Engineer Intern
                </Label>
              </div>
            </div>
          </div>
          <div className="w-[550px] h-18 rounded-lg p-3 border border-orange-200">
            <div className="flex gap-2">
              <Avatar className="w-10 h-10 rounded-md mt-auto mb-auto">
                <AvatarImage
                  src="/src/assets/sdplex_logo.jpeg"
                  className="w-full h-full object-cover"
                />
                <AvatarFallback>SD Plex</AvatarFallback>
              </Avatar>
              <div className="w-full grid font-normal">
                <div className="w-full flex justify-between">
                  <Label className="font-bold text-[16px]">SD Plex</Label>
                  <Label className="mt-auto mb-auto font-light text-xs">
                    May 2022 - July 2022
                  </Label>
                </div>
                <Label className="mt-auto mb-auto font-light text-sm">
                  Software Engineer Intern
                </Label>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </section>
  );
}
