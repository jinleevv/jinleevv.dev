import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BriefcaseBusiness, School } from "lucide-react";
import { RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";
import HomeTabs from "@/features/HomeTabs";
import DisplayName from "@/features/DisplayName";

export default function Home() {
  return (
    <section className="h-screen w-screen bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <Avatar className="w-32 h-32">
          <AvatarImage
            src="/profile.jpg"
            className="w-full h-full object-cover"
          />
          <AvatarFallback>JW</AvatarFallback>
        </Avatar>

        <DisplayName />
        {/* <Label className="mt-4 text-2xl font-bold">Jin Won Lee</Label> */}

        <div className="mt-2 flex gap-6 text-sm">
          <div className="flex gap-1 text-white">
            <BriefcaseBusiness strokeWidth={1.25} size={20} />
            <Label className="m-auto">Ultium CAM</Label>
          </div>
          <div className="flex gap-1 text-white">
            <School strokeWidth={1.25} size={20} />
            <Label className="m-auto">McGill University</Label>
          </div>
          <a className="flex gap-1 text-white hover:text-gray-600">
            <RiLinkedinBoxFill size={20} />
            <Label className="m-auto">LinkedIn</Label>
          </a>
          <a className="flex gap-1 text-white hover:text-gray-600">
            <RiGithubFill size={20} />
            <Label className="m-auto">Github</Label>
          </a>
        </div>

        <div className="grid mt-4 space-y-1">
          <Label className="text-center max-w-lg text-sm text-gray-600">
            I enjoy development and 3D modeling because it lets me be creative.
          </Label>{" "}
          <Label className="text-center max-w-lg text-sm text-gray-600">
            When I’m not doing projects, I play music and shred the slopes :)
          </Label>
        </div>
      </div>

      <div className="absolute bottom-32 sm:bottom-32 md:bottom-44 lg:bottom-72 left-0 w-full flex justify-center z-20">
        <HomeTabs />
      </div>
    </section>
  );
}
