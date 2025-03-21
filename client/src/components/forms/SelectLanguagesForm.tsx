import { useEffect } from "react";
import useLanguages from "../../services/useLanguages";
import InputForm from "./inputForm.tsx";

type SelectLanguageFormProps = {
  value: string;
  valuesize: number;
  index: number;
  handle: (e: React.ChangeEvent<HTMLSelectElement>|React.ChangeEvent<HTMLInputElement>,i:number) => void;
};

/**
 * Element Language du Formulaire. On va interroger le serveur pour récuperer la liste complète
 * value : valeur courante
 * handle : hook a appeler sur l'evenement
 */
function SelectLanguagesForm({ value, valuesize, index, handle }: SelectLanguageFormProps) {
  const { languages, getAllLanguages } = useLanguages();

  useEffect(() => {
    getAllLanguages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <label>
        Language {index} :
        <select name="languages" value={value} onChange={(e) => handle(e, index)} required>
          <option value="">Choix</option>
          {languages.map((langue) => (
            <option value={langue}>{langue}</option>
          ))}
        </select>
      </label>
      <InputForm title="Taille" name="size" value={valuesize.toString()} handle={(e) => handle(e, index)} />
    </>
  );
} 

export default SelectLanguagesForm;
