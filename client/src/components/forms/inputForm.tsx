import React from "react";

type inputFormProps = {
  title: string;
  name: string;
  value: string;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Element Text du Formulaire
 * title : titre de l'element du formulaire
 * name : nom de l'element
 * value : valeur courante
 * handle : hook a appeler sur l'evenement
 */
function InputForm({title, name, value, handle} : inputFormProps) {
  return (
    <label>
      {title}
      <input type="text" name={name} value={value} onChange={handle} /> 
    </label>
  );
}

export default InputForm;