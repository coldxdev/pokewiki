import React from "react";
import cn from "classnames";
import "./Loader.scss";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div
      className={cn("loader", {
        active: isLoading,
      })}
    >
      <span className="loader__item"></span>
    </div>
  );
};

export default Loader;
