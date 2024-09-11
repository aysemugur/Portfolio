import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Projects = () => {
  return (
    <section className="projects bg-lime-300  h-[360px] w-full py-16">
      <div className="container mx-auto w-[960px] h-[360px] gap-x-10 pr-0 relative z-20">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
      </div>
    </section>
  );
};

export default Projects;
