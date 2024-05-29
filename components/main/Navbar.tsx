"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { Dispatch, SetStateAction, useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const mainLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
  ];
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <div className=" w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-2 sm:px-10">
        <div className="  w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <div className="  flex items-center gap-3 ">
            {/* <button onClick={() => setOpenSidebar(true)}>
              <BiMenu color="white" size={26} />
            </button> */}
            {/* <SideBar
              isOpen={openSidebar}
              setIsOpen={setOpenSidebar}
              mainLinks={mainLinks}
              socialLinks={Socials}
            /> */}
            <a
              href="#about-me"
              className="h-auto w-auto flex flex-row items-center"
            >
              <span className="font-bold ml-[4px] sm:ml-[10px] text-2xl  text-gray-300">
                DeV.
              </span>
            </a>
          </div>
          <div className="hidden sm:flex  w-[500px] h-full  flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 w-full h-auto">
              <a href="#about-me" className="cursor-pointer">
                About me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
          </div>
          <div className="flex flex-row gap-5">
            {Socials.map((social, index) => (
              <Link href={social.href} target="_blank" key={index}>
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// interface SideBarProps {
//   isOpen: boolean;
//   setIsOpen?: Dispatch<SetStateAction<boolean>>;

//   mainLinks: {
//     label: string;
//     href: string;
//   }[];
//   socialLinks: object[];
// }

// const SideBar = ({
//   isOpen,
//   setIsOpen,
//   mainLinks,
//   socialLinks,
// }: SideBarProps) => {
//   return (
//     <div
//       onClick={() => setIsOpen && setIsOpen(false)}
//       className={`${isOpen ? "sidebar-backdrop" : ""}`}
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className={`${
//           isOpen ? "active-sidebar" : "non-active-sidebar"
//         } sidebar px-4 `}
//       >
//         <a
//           href="#about-me"
//           className="h-auto w-auto flex flex-row items-center py-4"
//         >
//           <span className="font-bold ml-[4px] sm:ml-[10px] text-2xl  text-gray-300">
//             DeV.
//           </span>
//         </a>
//         <div className="flex flex-col gap-2">
//           {mainLinks.map((link) => (
//             <a href={link.href} className="cursor-pointer">
//               {link.label}
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
