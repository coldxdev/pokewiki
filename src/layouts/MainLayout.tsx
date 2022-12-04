import React from "react";
import Header from "../components/Header/Header";
import ScrollToTop from "../components/ScrollToTop";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header />
      {children}
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
