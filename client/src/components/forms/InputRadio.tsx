type OptionParameter = {
  id:string;
  value:string;
  textLabel:string;
};

type InputRadioFormProps = {
  name:string;
  value: string;
  option: OptionParameter[];
  handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/**
 * Element Language du Formulaire. On va interroger le serveur pour récuperer la liste complète
 * value : valeur courante
 * handle : hook a appeler sur l'evenement
 */
function SelectInputRadio({ name, value, option, handle }: InputRadioFormProps) {
  return (
    <>
    {option.map((opt) => (
      <>
        <input
          type="radio"
          id={opt.id}
          value={opt.value}
          name={name}
          checked={value === opt.value}
          onChange={handle}
        />
        <label htmlFor={opt.id}>{opt.textLabel}</label>
      </>
    ))}
    </>
  );
}

export default SelectInputRadio;
