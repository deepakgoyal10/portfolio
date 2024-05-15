import Image from "next/image";
import Link from "next/link";
import React from "react";
interface props {
  src: string;
  title: string;
  description: string;
  href: string;
}
const ProjectCard = ({ src, title, description, href }: props) => {
  return (
    <div>
      <Link legacyBehavior passHref href={href ? href : "#!"}>
        <a
          // href={href ? href : "#!"}
          target="_blank"
          className="relative  overflow-hidden rounded-lg shadow-lg border-[#2A0E61] cursor-pointer"
        >
          <Image
            src={src}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
          <div className="relative p-4">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
            <p className="mt-2 text-gray-300 ">{description}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProjectCard;
