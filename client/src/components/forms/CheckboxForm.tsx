import React from "react";

type CheckboxFormProps = {
    title: string;
    name: string;
    value: boolean;
    handle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxForm({title, name, value, handle} : CheckboxFormProps) {
    return (
        <label>
            {title}
            <input type="checkbox" name={name} checked={value} onChange={handle} /> 
        </label>
    );
}

export default CheckboxForm;