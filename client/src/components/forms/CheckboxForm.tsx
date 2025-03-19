import React from "react";

type CheckboxFormProps = {
  title: string;
  name: string;
  value: boolean;
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Element Checkbox du Formulaire
 * title : titre de l'element du formulaire
 * name : nom de l'element
 * value : valeur courante
 * handle : hook a appeler sur l'evenement
 */
function CheckboxForm({title, name, value, handle} : CheckboxFormProps) {
  return (
    <label>
      {title}
      <input type="checkbox" name={name} checked={value} onChange={handle} /> 
    </label>
  );
}

export default CheckboxForm;