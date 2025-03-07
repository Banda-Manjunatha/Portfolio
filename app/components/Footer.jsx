import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <div className="mt-20">
      <div>
        <div className="text-center ">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-36 mx-auto mb-2"
          />
        </div>
        <div className="w-full text-center items-center justify-center flex-col gap-2 sm:flex">
          <div className="flex items-center gap-3 justify-center">
            <Image
              src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
              alt=""
              className="w-6"
            />
            <a href="mailto:bandamanjunatha2002@gmail.com">
              bandamanjunatha2002@gmail.com
            </a>
          </div>
          <p> +91 - 73865 95869</p>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Manjunatha Banda. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Banda-Manjunatha">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/banda-manjunatha/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
