import React from "react";
import cn from "classnames";
import "./Loader.scss";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div
      className={cn("app-loader", {
        active: isLoading,
      })}
    >
      <span className="app-loader__item"></span>
    </div>
  );
};

export default Loader;
