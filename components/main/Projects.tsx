import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:grid grid-cols-3 gap-10 px-10 z-40">
        <ProjectCard
          src="/discord_logo_blue_neon.webp"
          title="Discord Clone"
          description="Technology Used Next.js 12, React hook form, Shedcn, Zustand, TypeScript, Prisma and more."
          href="https://discord-clone-6i3c.onrender.com"
        />
        <ProjectCard
          src="/google_meet_icon.png"
          title="VR-Meet (Google Meet Clone)"
          description="Technology Used Next 13, Peer Js, React Player, Web sockets, Tailwind and more."
          href="https://github.com/deepakgoyal10/vr_meet"
        />
        <ProjectCard
          src="/space_docs.png"
          title="Space Docs"
          description="Technology Used React, Tailwind, Framer-motion, Appwrite, HTML, CSS and more."
          href="https://space-docs-mu.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
