import React from "react";

type FormControlProps = {
    id: string,
    title: string,
    placeholder?: string,
    error?: string
}

const FormControl = ({ id, title, placeholder, error }: FormControlProps) => {
    return (
        <label htmlFor={id} className='flex flex-col'>
            <div className="mb-1 flex justify-between">
                <span className="text-blue-900">{title}</span>
                {error && <span className="font-bold text-red-500">{error}</span>}
            </div>
            <input className="w-full border rounded-md border-gray-300 py-3 px-4 text-md font-bold text-blue-900 
                            focus:border-indigo-400 outline-none"
                placeholder={placeholder} id={id} />
        </label>

    );
}

export default FormControl;