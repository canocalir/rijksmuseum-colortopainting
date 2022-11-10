import { createContext, useState } from "react";
import { languageOptions, dictionaryList } from "../languages";

const LanguageContext = createContext({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});

const LanguageProvider = ({ children }) => {
  const defaultLanguage = window.localStorage.getItem("langs");
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || "en");

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("langs", newLanguage);
    },
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

export { LanguageContext };
