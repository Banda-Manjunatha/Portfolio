import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
        className="text-center text-5xl"
      >
        My latest work
      </motion.h2>
      <motion.p
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.5,
        }}
      >
        welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.6,
        }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black"
      >
        {workData.map((project, ind) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.5,
            }}
            key={ind}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group bg-black w-full"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-3 px-3 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-2xl ">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <a
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] hover:bg-lime-300 transition"
                target="_blank"
                href={`${project.link}`}
              >
                <Image src={assets.send_icon} alt="" className="w-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="flex  justify-center w-full">
        <button className="border rounded-full hover:shadow-sm px-8 border-gray-500 flex items-center gap-2 hover:bg-lightHover py-2 dark:border-white dark:hover:bg-darkHover">
          Show more
          <Image
            alt=""
            src={
              isDarkMode
                ? assets.right_arrow_bold_dark
                : assets.right_arrow_bold
            }
            className="w-4"
          />
        </button>
      </div>
    </motion.div>
  );
};

export default Work;
