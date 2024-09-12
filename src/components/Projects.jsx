import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Projects = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Projects",
      links: ["View Site", "Github"],
      projects: [
        {
          title: "Workintech",
          description:
            "A simple, customizable, minimum setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "vercel"],
          image: "pro.png",
        },
        {
          title: "Journey",
          description:
            "A simple, customizable, minimum setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "vercel"],
          image: "pro2.png",
        },
      ],
    },
    tr: {
      title: "Projeler",
      viewProject: "Projeyi Görüntüle",
      projects: [
        {
          title: "Workintech",
          description: "Workintech projesinin kısa açıklaması",

          tags: ["React", "Node.js", "MongoDB"],
        },
        {
          title: "Journey",
          description: "Journey projesinin kısa açıklaması",

          tags: ["Vue.js", "Express", "PostgreSQL"],
        },
      ],
    },
  };

  return (
    <section className="projects bg-lime-300 py-16">
      <div className="flex flex-col gap-y-7  mx-auto mt-0 w-[960px]  ">
        <h2 className="text-4xl font-bold text-indigo-700 mb-0 tracking-wide">
          {content[language].title}
        </h2>
        {content[language].projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-row bg-white shadow-3xl mb-2 rounded-xl drop-shadow-[8px_25px_5px_rgba(0,0,0,0.08)] "
          >
            <img
              src={`/src/assets/pictures/${project.image}`}
              alt={project.title}
              className="min-w-[360px] min-h-[360px] object-fit rounded-l-lg"
            />
            <div className="p-14  ">
              <h3 className="text-4xl font-semibold mb-2 text-indigo-700">
                {project.title}
              </h3>
              <p className="text-gray-600 text-l mb-6 mt-5 ">
                {project.description}
              </p>
              <div className="  rounded-full text-zinc-50 pr-4 mb-6  ">
                {project.tags.map((tag, tagIndex) => (
                  <button
                    key={tagIndex}
                    className="text-zinc-50 text-sm mr-2 bg-indigo-700 rounded-full px-5 py-1.5 "
                  >
                    {tag}
                  </button>
                ))}
              </div>
              <div className="text-black  underline underline-offset-4 decoration-[1px] ">
                {content[language].links.map((link, linkIndex) => (
                  <a key={linkIndex} className=" text-black text-xl mr-10 ">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
