import React from "react";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

interface IProps {
  className?: string;
  color: "dark" | "light"; // dark fonts | light fonts
}

function Logo(props: IProps) {
  return (
    <>
      <img
        src={props.color === "dark" ? logoDark : logoLight}
        alt="project vdora logo"
        className={`rounded max-w-full ${props.className}`}
      />
    </>
  );
}

export default Logo;
