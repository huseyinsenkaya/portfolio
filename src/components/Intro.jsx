// assets
import model from "../../public/assets/huseyin.png";
import profile from "../../public/assets/profile.png";

export default function Intro() {
  return (
    <>
      <div className="flex w-full flex-col items-center sm:w-[32rem]">
        <img
          src={model}
          alt="Huseyin 3D Model"
          className="max-h-full w-[36rem] max-w-full"
        />
        <div className="dark:bg-tangerine w-full rounded bg-coral px-10 py-3">
          <h2 className="text-sm text-white sm:text-base">
            Hello, I am a software engineer & web developer
          </h2>
        </div>
      </div>
      <div className="flex w-full justify-between sm:w-[32rem]">
        <div className="text-left">
          <p className="text-3xl">Hüseyin Şen Kaya</p>
          <p>Engineer / Developer</p>
        </div>
        <div className="h-24 w-24 rounded-full">
          <img
            className="h-full w-full rounded-full border-2 border-steel object-cover dark:border-vanilla"
            src={profile}
            alt="Huseyin Profile Photo"
          />
        </div>
      </div>
    </>
  );
}
