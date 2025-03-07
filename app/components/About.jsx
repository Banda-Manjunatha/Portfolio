import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
        className="text-center text-5xl"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        {/* <motion.div
          className="w-64 sm:w-80 rounded-3xl max-w-none"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image
            alt="user"
            src={assets.user_image}
            className="w-full rounded-3xl
                    "
          />
        </motion.div> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
          className="w-full"
        >
          <p className="mb-10">
            {" "}
            A motivated frontend developer with 6 months of internship
            experience, skilled in building responsive and user-friendly web
            interfaces using HTML, CSS, JavaScript, and React.js. Proficient in
            styling with Tailwind CSS and ensuring cross-browser compatibility.
            Experienced in integrating RESTful APIs and collaborating in Agile
            workflows using Git for version control. Passionate about creating
            seamless user experiences and continuously improving technical
            skills.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="grid grid-cols-auto gap-10 my-10 sm:px-16"
          >
            {infoList.map(({ icon, iconDark, title, description }, ind) => (
              <motion.li
                whileInView={{ scale: 1.05 }}
                key={ind}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration : 0.5-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
              >
                {" "}
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-3"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm dark:text-white/80">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="my-6 text-gray-700 dark:text-white text-center"
          >
            Skills I have
          </motion.h4>
          <motion.ul className="flex items-center justify-center gap-3 sm:gap-5">
            {toolsData.map((tool, ind) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={ind}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration : 0.5-500"
              >
                <Image src={tool} alt="Tool" className=" w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
