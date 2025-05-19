"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Bangers } from 'next/font/google';
import { FaHome } from "react-icons/fa";

const bangers = Bangers({ weight: "400", subsets: ["latin"] });

const Logo = () => {
  const [width, setWidth] = useState(0);
  const [showButton, setShowButton] = useState(false);

  // Handle width change
  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    updateWidth(); // set on mount
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Handle scroll change
  useEffect(() => {
    const changeNavButton = () => {
      if (window.scrollY >= 400 && window.innerWidth < 768) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", changeNavButton);
    changeNavButton(); // initialize state
    return () => window.removeEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        <div className="flex items-center gap-2">
          <p
            className={bangers.className}
            style={{
              fontSize: width > 768 ? "32px" : "20px",
              color: "#fff",
            }}
          >
            Aaron
          </p>

        </div>
      </Link>

    </>
  );
};

export default Logo;
