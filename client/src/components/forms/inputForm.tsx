import React from "react";

type inputFormProps = {
    title: string;
    name: string;
    value: string;
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputForm({title, name, value, handle} : inputFormProps) {
    return (
        <label>
            {title}
            <input type="text" name={name} value={value} onChange={handle} /> 
        </label>
    );
}

export default InputForm;