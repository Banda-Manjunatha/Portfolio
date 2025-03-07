import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      {" "}
      <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Image
            src={assets.profile_img}
            alt=""
            className="rounded-full w-32 mt-10"
          />
        </motion.div>
        <motion.h3
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
          className="flex items-end gap-2 text-xl md:text-2xl mb-3 "
        >
          Hi! I'm Manjunatha Banda{" "}
          <Image src={assets.hand_icon} alt="" className="rounded-full w-6" />
        </motion.h3>
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
          className="text-3xl sm:text-6xl lg:text-[66px] "
        >
          Frontend Developer based in Andhra Pradesh.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
          className="max-2-2xl mx-auto "
        >
          Transforming ideas into functional and elegant UIs.
        </motion.p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            href="#contact"
            className="px-10 py-3 border rounded-full flex items-center border-white gap-2 bg-black dark:bg-transparent text-white hover:bg-darkHover"
          >
            contact me
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>
          <motion.a
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            href="/sample-resume.pdf"
            download
            className={`px-10 py-3 border rounded-full flex items-center border-gray-500 gap-2 bg-white dark:text-black hover:bg-lightHover`}
          >
            resume
            <Image src={assets.download_icon} alt="" className="w-4" />
          </motion.a>
        </div>
      </div>
    </>
  );
};

export default Header;
