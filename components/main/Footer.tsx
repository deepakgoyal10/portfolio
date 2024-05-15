import Link from "next/link";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import { RxDiscordLogo, RxGithubLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row  justify-around flex-wrap z-40">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>

            <Link href={"https://github.com/deepakgoyal10"} target="_blank">
              <div className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px] cursor-pointer">
                  Github
                </span>
              </div>
            </Link>
            <Link href={"https://discord.gg/KkzHGpBz"} target="_blank">
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Discord</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <Link href={"https://www.instagram.com/deepakgoyall_/"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <FaYoutube />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </Link>
            <Link href={"https://twitter.com/Deepakgoyall_"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </Link>
            <Link href={"https://www.linkedin.com/in/deepakgoyal18/"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <RxDiscordLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <Link href={"https://www.linkedin.com/in/deepakgoyal18/"}>
              <p className="flex flex-row items-center my-[15px] cursor-pointer">
                <span className="text-[15px] ml-[6px]">Learning about me</span>
              </p>
            </Link>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                className="text-[15px] ml-[6px]"
                href="mailto:deepakgoyal1886@gmail.com"
              >
                deepakgoyal1886@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="mb-[20px] text-[15px] text-center ">
          &copy; DeV 2024 Inc. All right reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
