// icons
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="py-5 text-center">
      <div className="flex justify-center gap-4 text-2xl text-steel opacity-40 dark:text-vanilla">
        <a href="https://www.linkedin.com/in/huseyinsenk/" target="_blank">
          <BsLinkedin />
        </a>

        <a href="https://github.com/huseyinsenkaya" target="_blank">
          <BsGithub />
        </a>
      </div>
      <p className="mt-2 text-sm opacity-50">
        &copy; {new Date().getFullYear()} Hüseyin Şen Kaya. All rights reserved.
      </p>
    </div>
  );
}
