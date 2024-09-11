import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const Profile = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Profile",
      info: {
        birthdate: "Birthdate",
        city: "City",
        education: "Education",
        role: "Preferred Role",
      },
      aboutMe: {
        title: "About Me",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
    tr: {
      title: "Profil",
      info: {
        birthdate: "Doğum Tarihi",
        city: "Şehir",
        education: "Eğitim",
        role: "Tercih Edilen Rol",
      },
      aboutMe: {
        title: "Hakkımda",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    },
  };

  return (
    <section className="profile bg-indigo-700 flex flex-col  py-16 text-white">
      <div className="container  mx-auto w-[960px]">
        <h2 className="text-3xl font-bold mb-8">{content[language].title}</h2>
        <div className="flex gap-x-10">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Basic Information</h3>
            <ul className="space-y-2">
              <li>
                <strong>{content[language].info.birthdate}:</strong>
                24.03.1996
              </li>
              <li>
                <strong>{content[language].info.city}:</strong> Ankara
              </li>
              <li>
                <strong>{content[language].info.education}:</strong>
                Hacettepe Unv.
              </li>
              <li>
                <strong>{content[language].info.role}:</strong> Frontend UI
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold mb-4">
              {content[language].aboutMe.title}
            </h3>
            <p>{content[language].aboutMe.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
