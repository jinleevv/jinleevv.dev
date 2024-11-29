import { useLocation } from "react-router-dom"; // Import useLocation
import { Label } from "@/components/ui/label";
import { RiGithubFill } from "react-icons/ri";

const projectDetails = [
  {
    path: "AKCSE_McGill_Website",
    logo: "/akcsemcgill_project.png",
    demo: "/akcsemcgill_demo.mp4",
    projectName: "AKCSE McGill Website",
    purpose:
      "It aims to provide an platform where members can be easily updated with AKCSE events. It also encourages the members to contribute to the website to familiarize them with GitHub and web development. This project will ultimately create a community where members can learn to collaborate and improve their skill sets.",
    achievements:
      "The launch of AKCSE McGill enabled the successful development of a functional website, providing students with updates on events. As an evolving project, it creates an environment that fosters a community where individuals can contribute their inputs to the development of AKCSE McGill.",
    description:
      "AKCSE McGill is a website that students within the student body collaboratively create. The website serves as a space where individuals can be informed about events, intitiatives, and updates within AKCSE; this platform also offers hands-on experiences for members to gain learning opportunities through web development and GitHub Collaboration both within and outside the club.",
  },
];

export default function ProjectDetails() {
  const location = useLocation();
  const basename = location.pathname.split("/").pop();
  const project = projectDetails.find((project) => project.path === basename);
  return (
    <section className="h-screen w-screen bg-[#FDF7F0] flex flex-col items-center justify-center">
      <div className="grid w-3/4 items-center">
        {project && (
          <>
            <div key={project.path} className="flex gap-2 mb-8">
              <img src={project.logo} className="w-10 h-10 object-cover" />
              <Label className="text-lg font-bold mt-auto mb-auto">
                {project.projectName}
              </Label>
            </div>
            <div className="grid grid-cols-2 space-x-10">
              <div className="grid m-auto h-3/4 w-full">
                <video
                  autoPlay
                  muted
                  loop
                  className="rounded-lg w-full h-full object-cover"
                >
                  <source src={project.demo} type="video/mp4" />
                </video>
                <a className="flex w-full mt-2 gap-1 justify-end text-black hover:text-gray-600">
                  <RiGithubFill size={20} />
                  <Label className="mt-auto mb-auto">Github</Label>
                </a>
              </div>
              <div>
                {["Purpose", "Achievements", "Description"].map((field) => (
                  <div
                    className="flex justify-between w-full gap-2 mb-4"
                    key={field}
                  >
                    <div className="w-32 flex-shrink-0">
                      <Label className="font-bold">{field}: </Label>
                    </div>
                    <div className="flex-grow">
                      <Label>
                        {field === "Purpose"
                          ? project.purpose
                          : field === "Achievements"
                          ? project.achievements
                          : project.description}
                      </Label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
