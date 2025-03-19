import { useEffect } from "react";
import useLanguages from "../../services/useLanguages";

type SelectLanguageFormProps = {
  value: string;
  handle: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

/**
 * Element Language du Formulaire. On va interroger le serveur pour récuperer la liste complète
 * value : valeur courante
 * handle : hook a appeler sur l'evenement
 */
function SelectLanguagesForm({value, handle} : SelectLanguageFormProps) {
  const {languages, getAllLanguages} = useLanguages();

  useEffect (() => {
    getAllLanguages();
  },[]) ;

  return (
    <label>
      Choisir mon lmanguage
      <select name="languages" value={value} onChange={handle} required>
        <option value="">Choix</option>
        {
          languages.map((langue) => (
            <option value={langue}>{langue}</option>
          ))
        }
      </select>
    </label>
  );
}

export default SelectLanguagesForm;