// assets
import resume from "../../public/assets/huseyinsen-kaya.pdf";
// icons
import { FiDownload } from "react-icons/fi";

export default function About() {
  return (
    <div className="flex w-full flex-col items-start gap-4 sm:w-[32rem]">
      <h3 className="text-xl font-bold underline decoration-coral decoration-4 underline-offset-4">
        About
      </h3>
      <p className="text-left text-sm md:text-lg">
        Hello there! I'm a passionate junior software and web developer skilled
        in Vue.js, with a growing interest in React. I'm captivated by the world
        of 3D modeling, and I'm currently expanding my expertise by learning the
        Three.js library. In my free time, I find joy in creating intricate
        pixel art, blending my love for technology and creative expression.
      </p>
      <a
        href={resume}
        download
        target="_blank"
        className="flex cursor-pointer items-center self-center rounded-lg border-2 border-black px-3 py-2 text-sm hover:bg-coral hover:text-white dark:border-white"
      >
        Resume{" "}
        <span className="ml-1 inline-block text-base">
          <FiDownload />
        </span>
      </a>
    </div>
  );
}
