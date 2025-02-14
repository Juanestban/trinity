import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import "./MainLayout.css";

const MainLayout = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <main>
      <button
        className="buttonTop"
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowCircleUp onClick={scrollToTop} />
      </button>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
