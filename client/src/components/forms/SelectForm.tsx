type SelectFormProps = {
  name:string;
  value: string;
  title: string;
  option: string[]
  handle: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

/**
 * Element Language du Formulaire. On va interroger le serveur pour récuperer la liste complète
 * value : valeur courante
 * handle : hook a appeler sur l'evenement
 */
function SelectForm({ name, value, title, option, handle }: SelectFormProps) {
  return (
    <label>
      {title}
      <select name={name} value={value} onChange={handle} required>
        <option value="">Choix</option>
        {option.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </select>
    </label>
  );
}

export default SelectForm;
