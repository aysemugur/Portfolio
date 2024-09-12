import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Profile = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Basic Information",
      info: {
        birthdate: "Birth date",
        city: "City",
        education: "Education",
        role: "Preferred Role",
      },
      answer: {
        birthdate: "24.03.1996",
        city: "Ankara",
        education: "Hacettepe Unv. Biology Licence,2016",
        role: "FrontEnd,UI",
      },
      aboutMe: {
        title: "About Me",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    },
    tr: {
      title: "Kişisel Bilgiler",
      info: {
        birthdate: "Doğum Tarihi",
        city: "Şehir",
        education: "Eğitim",
        role: "Tercih Edilen Rol",
      },
      aboutMe: {
        title: "Hakkımda",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    },
  };

  return (
    <section className="profile bg-indigo-700 flex flex-col  py-24  text-white">
      <div className="container  mx-auto w-[960px]">
        <h2 className="text-5xl font-bold text-lime-300 tracking-wide mb-8">
          Profile
        </h2>
        <div className="grid grid-flow-row grid-cols-3 items-stretch gap-8 pt-0">
          <div>
            <h3 className="text-3xl font-normal mb-5 leading-none">
              {content[language].title}
            </h3>

            <table>
              <tbody>
                <tr className=" align-top h-[45px] ">
                  <td className="text-lime-300 font-semibold p-0 leading-2 text-start">
                    {content[language].info.birthdate}
                  </td>
                  <td className="font-light p-0  text-start">
                    {content[language].answer.birthdate}
                  </td>
                </tr>
                <tr className=" align-top h-[45px]">
                  <td className="text-lime-300 font-semibold p-0 leading-2 text-start">
                    {content[language].info.city}
                  </td>
                  <td className="font-light p-0  text-start">
                    {content[language].answer.city}
                  </td>
                </tr>
                <tr className="h-[70px] align-top ">
                  <td className="text-lime-300 font-semibold p-0  text-start">
                    {content[language].info.education}
                  </td>
                  <td className="font-light p-0  text-start">
                    {content[language].answer.education}
                  </td>
                </tr>
                <tr className="h-[45px] align-top ">
                  <td className="text-lime-300 font-semibold p-0 leading-2 text-start">
                    {content[language].info.role}
                  </td>
                  <td className="font-light p-0  text-start">
                    {content[language].answer.role}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <img
              src="/src/assets/pictures/prof.png"
              className="object-fit w-full h-full bg-lime-300 rounded-xl"
            ></img>
          </div>
          <div>
            <h3 className="text-3xl font-normal mb-4 leading-none">
              {content[language].aboutMe.title}
            </h3>
            <p className="mb-4 text-lg font-light ">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </p>
            <p className="text-lg font-light">
              {content[language].aboutMe.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
