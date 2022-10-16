import React from "react";

type TContainer = {
  children: React.ReactNode;
  bg?: string;
  text?: string;
  className?: string;
  id?: string;
  pdY?: string;
};

export const Container: React.FC<TContainer> = ({
  children,
  bg = "bg-white",
  text = "",
  className = "",
  id = "",
  pdY = "py-6 md:py-14",
}) => (
  <div
    id={id}
    className={`${className} flex flex-col ${bg} ${text} ${pdY} justify-center items-center`}
  >
    <div className="container px-5 relative">{children}</div>
  </div>
);
