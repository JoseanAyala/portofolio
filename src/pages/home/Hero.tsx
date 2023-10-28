import Socials from "../../components/Socials";
import { Typography } from "@material-tailwind/react";
export default function Hero() {
  return (
    <header className="animate-fadeUp lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:animate-fadeDown lg:flex-col lg:justify-between lg:py-24">
      <div className="flex flex-col items-center">
        <img
          src="/assets/profile.png"
          alt="Profile Photo"
          className="mb-4 h-64 w-64 rounded-full object-cover object-center shadow-lg shadow-blue-gray-900/50"
        />
        <div className="text-center">
          <Typography
            textGradient
            variant="h1"
            color="light-blue"
            className="mb-1 text-center tracking-tight text-light-blue-600"
          >
            I'm Josean Ayala,
          </Typography>
          <Typography
            variant="lead"
            color="blue-gray"
            as="h2"
            className="font-normal"
          >
            an experienced software engineer passionate about full stack
            development who thrives in collaborative environments and creates
            seamless solutions.
          </Typography>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 pt-4">
        <Socials animate />
      </div>
    </header>
  );
}
