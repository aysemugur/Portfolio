import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

const Projects = () => {
  const { language } = useLanguage();
  const { theme } = useTheme();

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
          image:
            "https://images.unsplash.com/photo-1690264695884-f62022341c8f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Journey",
          description:
            "A simple, customizable, minimum setup cookie plugin that allows your users to select which cookies to accept or decline. This was created with vanilla JS, SCSS and Parcel Bundler and is available as a NPM package and the git repository makes any type of customization to code and themes possible.",
          tags: ["react", "redux", "vercel"],
          image:
            "https://images.unsplash.com/photo-1523053155959-8de8d942050c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    tr: {
      title: "Projeler",
      links: ["Siteyi Görüntüle", "Github"],
      projects: [
        {
          title: "Workintech",
          description:
            "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimum kurulum çerez eklentisi. Bu, Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu her türlü özelleştirmeyi yapar kodlama ve temalar mümkün.",
          tags: ["react", "redux", "vercel"],
          image:
            "https://images.unsplash.com/photo-1690264695884-f62022341c8f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Journey",
          description:
            "Kullanıcılarınızın hangi çerezleri kabul edeceğini veya reddedeceğini seçmesine olanak tanıyan basit, özelleştirilebilir, minimum kurulum çerez eklentisi. Bu, Vanilla JS, SCSS ve Parcel Bundler ile oluşturulmuştur ve bir NPM paketi olarak mevcuttur ve git deposu her türlü özelleştirmeyi yapar kodlama ve temalar mümkün.",
          tags: ["react", "redux", "vercel"],
          image:
            "https://images.unsplash.com/photo-1523053155959-8de8d942050c?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  };

  const currentContent = content[language];

  return (
    <section
      className={`projects pt-6 pb-2 ${
        theme === "dark" ? "bg-[#1a210a]" : "bg-lime-300"
      }`}
    >
      <div className="container mx-auto max-w-[960px]  px-4">
        <h2
          className={`text-4xl md:text-4xl font-bold ${
            theme === "dark" ? "text-lime-300" : "text-indigo-700"
          } tracking-wide mb-8`}
        >
          {currentContent.title}
        </h2>
        {currentContent.projects.map((project, index) => (
          <div
            key={index}
            className={`flex h-[320px] min-[425px]:flex-rows ${
              theme === "dark" ? "bg-gray-800" : "bg-white"
            } shadow-lg rounded-xl overflow-hidden mb-8`}
          >
            <img
              src={
                project.image.startsWith("http")
                  ? project.image
                  : `/images/${project.image}`
              }
              alt={project.title}
              className="w-full h-[320px] object-cover  rounded-l  sm:h-80 md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[320px]"
            />
            <div className=" min-[425px]:p-7 flex flex-col ">
              <div>
                <h3
                  className={`text-3xl md:text-4xl font-semibold mb-4 ${
                    theme === "dark" ? "text-indigo-400" : "text-indigo-700"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={` ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  } text-base mb-6 leading-tight`}
                >
                  {project.description}
                </p>
                <div className=" flex flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`${
                        theme === "dark"
                          ? "bg-[#8173da] text-white"
                          : "bg-indigo-700 text-zinc-50"
                      } text-sm rounded-full px-3 py-1 mr-2 mb-5`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`${
                  theme === "dark" ? " text-[#cbf281]" : "text-black"
                }`}
              >
                {currentContent.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className={`text-base mr-6 underline underline-offset-4 hover:${
                      theme === "dark" ? "text-indigo-300" : "text-indigo-700"
                    }`}
                  >
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
