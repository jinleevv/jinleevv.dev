import { useLocation } from "react-router-dom"; // Import useLocation
import { Label } from "@/components/ui/label";
import { RiGithubFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { ArrowRight } from "lucide-react";

const projectDetails = [
  {
    path: "AKCSE_McGill_Website",
    logo: "/akcsemcgill_project.png",
    demo: "/akcsemcgill_demo.mp4",
    projectName: "AKCSE McGill Website",
    github_link: "https://github.com/jinleevv/akcse",
    purpose:
      "It aims to provide an platform where members can be easily updated with AKCSE events. It also encourages the members to contribute to the website to familiarize them with GitHub and web development. This project will ultimately create a community where members can learn to collaborate and improve their skill sets.",
    achievements:
      "The launch of AKCSE McGill enabled the successful development of a functional website, providing students with updates on events. As an evolving project, it creates an environment that fosters a community where individuals can contribute their inputs to the development of AKCSE McGill.",
    description:
      "AKCSE McGill is a website that students within the student body collaboratively create. The website serves as a space where individuals can be informed about events, intitiatives, and updates within AKCSE; this platform also offers hands-on experiences for members to gain learning opportunities through web development and GitHub Collaboration both within and outside the club.",
  },
  {
    path: "Booky",
    logo: "/booky_logo.png",
    demo: "/booky_demo.mov",
    projectName: "Booky",
    github_link: "https://github.com/jinleevv/Booky",
    purpose:
      "It aims to provide a platform where people can organize meetings more easily.",
    achievements:
      "Successfully implemented features for setting up meetings, inviting participants, viewing and managing weekly meetings on a dashboard, sending email notifications for confirmations and cancellations, and allowing hosts to cancel entire meetings with automatic attendee notifications.",
    description:
      "Booky Platform was created to help professors organize office hours and one-time appointments more efficiently. Users can schedule meetings, invite participants, and manage their weekly meetings from a centralized dashboard. The platform supports email notifications for meeting confirmations and cancellations, and hosts have the ability to cancel entire meetings with ease, notifying all attendees instantly.",
  },
];

export default function ProjectDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const basename = location.pathname.split("/").pop();
  const project = projectDetails.find((project) => project.path === basename);
  return (
    <section className="sm:h-full md:h-full lg:h-screen w-screen bg-black flex flex-col items-center justify-center">
      <div className="grid w-3/4 items-center">
        <div className="flex w-full h-8 mt-2 mb-1 justify-start">
          <Button
            variant="outline"
            className="h-7 focus:outline-none text-black border-gray-200 hover:border-gray-200"
            onClick={() => navigate(`/`)}
          >
            Home <ArrowRight strokeWidth={1.5} />
          </Button>
        </div>
        {project && (
          <>
            <div key={project.path} className="flex gap-2 mb-8">
              <img
                src={project.logo}
                className="w-10 h-10 object-cover bg-white rounded-lg"
              />
              <Label className="text-lg text-white font-bold mt-auto mb-auto">
                {project.projectName}
              </Label>
            </div>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 space-x-10 text-white">
              <div className="grid h-3/4 w-full">
                <video
                  autoPlay
                  loop
                  className="rounded-lg w-full h-full object-cover"
                >
                  <source src={project.demo} type="video/mp4" />
                </video>
                <a
                  className="flex w-full mt-2 gap-1 justify-end text-white hover:text-gray-400"
                  href={project.github_link}
                  target="_black"
                >
                  <RiGithubFill size={20} />
                  <Label className="mt-1">Github</Label>
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
