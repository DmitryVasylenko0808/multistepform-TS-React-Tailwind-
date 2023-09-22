import React from "react";

type FormControlProps = {
    id: string;
    title: string;
    defaultValue?: string | "";
    placeholder?: string;
    error?: string | null;
}

const FormControl = ({ id, title, defaultValue, placeholder, error }: FormControlProps) => {
    const invalid = error ? "border-red-500" : "";

    return (
        <label htmlFor={id} className='flex flex-col'>
            <div className="mb-1 flex justify-between">
                <span className="text-blue-900">{title}</span>
                {error && <span className="font-bold text-red-500">{error}</span>}
            </div>
            <input className={`w-full border rounded-md border-gray-300 py-3 px-4 text-md font-bold text-blue-900 
                            focus:border-indigo-400 outline-none ${invalid}`}
                placeholder={placeholder} id={id}
                defaultValue={defaultValue} />
        </label>

    );
}

export default FormControl;