import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto flex flex-col md:flex-row w-full items-center md:justify-between border-t pt-4 pb-4 2xl:px-0 text-xs">
      <div className="mb-2 md:mb-0">
        © {new Date().getFullYear()}, Jin Won Lee. All rights reserved.
      </div>

      <div className="flex items-center gap-4">
        <a href="mailto:jinwon.lee@mail.mcgill.ca" className="hover:text-black">
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
  );
}
