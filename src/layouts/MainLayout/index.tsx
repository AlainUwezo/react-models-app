import { FunctionComponent, ReactNode, useState, useEffect } from "react";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";

type Props = {
  children: ReactNode;
};

const MainLayout: FunctionComponent<Props> = ({ children }) => {
  const [isScrolledBottom, setIsScrolledBottom] = useState(false);

  useEffect(() => {
    let previousScroll = window.scrollY || document.documentElement.scrollTop;
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolledBottom(true);
      } else {
        setIsScrolledBottom(false);
      }
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll < previousScroll) {
        setIsScrolledBottom(false);
      }

      // On modifie l'ancienne position par la nouvelle
      previousScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="my-20">{children}</div>

      {!isScrolledBottom && <Navbar />}
      <Footer />
    </div>
  );
};

export default MainLayout;
