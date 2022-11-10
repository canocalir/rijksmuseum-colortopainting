import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

const Translate = ({ t }) => {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[t] || t;
};

export default Translate