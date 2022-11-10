import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import { languageOptions } from "../../languages";
import { LangSelect } from "../../shared/styled";

const LangChanger = () => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);
  const handleLanguageChange = (e) => userLanguageChange(e.target.value);

  return (
    <LangSelect onChange={handleLanguageChange} value={userLanguage}>
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </LangSelect>
  );
};

export default LangChanger;
