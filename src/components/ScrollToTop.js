import { useEffect } from "react";

//scrolls the page to the very top

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    // Scroll to the top of the page instantly
    window.scroll({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return children;
};

export default ScrollToTop;
