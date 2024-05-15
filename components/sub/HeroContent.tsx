"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Type from "./Type";
import { FaDownload } from "react-icons/fa";
const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full  z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="welcome-text text-[13px] pr-2 ">Hi There </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-2-[600px] w-auto h-auto"
        >
          <span>
            I'm
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Deepak Goyal{" "}
            </span>
            <span className="text-5xl leading-[4 rem]">
              <Type />
            </span>
          </span>
        </motion.div>
        {/* <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-2-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div> */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Transforming ideas into reality with cutting-edge web and software
          development. Passionate about creating dynamic, user-centric
          applications. Let's build something amazing together! Feel free to
          contact me.
        </motion.p>
        <motion.a
          onClick={(e) => {
            // https://drive.google.com/file/d/1GGZ2VT6WgQbcd4on0BK1wDQOmJ6v7mji/view?usp=sharing
            window.open(
              "https://drive.google.com/uc?export=download&id=1GGZ2VT6WgQbcd4on0BK1wDQOmJ6v7mji",
              "_blank"
            );
          }}
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <div className="flex gap-4 items-center justify-center">
            <span>My Resume</span>
            <FaDownload />
          </div>
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src={"/mainIconsdark.svg"}
          alt="'wrok icon"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
