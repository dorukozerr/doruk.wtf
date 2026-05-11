import { Mail, Github, Linkedin, Twitter } from "iconoir-react";
import type { SVGProps } from "react";

const iconProps = {
  width: 48,
  height: 48,
  strokeWidth: 0.75,
  className: "cursor-pointer text-white/80 transition-all duration-300 hover:text-white",
};

export const Twitch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
  </svg>
);

export const socials = [
  {
    icon: <Github {...iconProps} />,
    linkProps: { href: "https://github.com/dorukozerr/", target: "_blank" },
  },
  {
    icon: <Twitch {...iconProps} />,
    linkProps: { href: "https://www.twitch.tv/d0ruk0z3r", target: "_blank" },
  },
  {
    icon: <Twitter {...iconProps} />,
    linkProps: { href: "https://x.com/dorukozerrr", target: "_blank" },
  },
  {
    icon: <Linkedin {...iconProps} />,
    linkProps: {
      href: "https://www.linkedin.com/in/dorukozer/",
      target: "_blank",
    },
  },
  {
    icon: <Mail {...iconProps} />,
    linkProps: {
      href: "mailto:dorukozer@protonmail.com?subject=Found your email from doruk.wtf",
    },
  },
];
