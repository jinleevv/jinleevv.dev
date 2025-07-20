import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const bottomPadding = pathname === "/" ? "" : "pb-16";

  return (
    <div
      className={`flex w-full h-fit justify-center text-xs px-4 md:pt-16 pb-2 md:px-44 ${bottomPadding}`}
    >
      <footer className="flex flex-col md:flex-row w-full items-center md:justify-between border-t pt-4 pb-4">
        <div className="mb-2 md:mb-0">
          © {new Date().getFullYear()}, Jin Won Lee. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:jinwon.lee@mail.mcgill.ca"
            className="hover:text-black"
          >
            jinwon.lee@mail.mcgill.ca
          </a>
          <a
            href="https://github.com/jinleevv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <RiGithubFill size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jinleevv/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition"
          >
            <RiLinkedinBoxFill size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}
