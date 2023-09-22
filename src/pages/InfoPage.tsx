import React, { useContext, useState } from "react";
import FormControl from "../components/FormControl";
import { useNavigate } from "react-router";
import { DataContext } from "../components/App";
import { DataContextType } from "../types";

type FormFileds = {
    name: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
}

type ErrorFields = {
    name: string | null;
    email: string | null;
    phone: string | null;
}

const InfoPage = () => {
    const [validator, setValidator] = useState<ErrorFields>({} as ErrorFields);
    const { personalInfo, fillPersonalInfo } = useContext(DataContext) as DataContextType;
    const navigate = useNavigate();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const target = e.target as typeof e.target & FormFileds;
        const info = {
            name: target.name.value,
            email: target.email.value,
            phone: target.phone.value
        };

        if (validate(info.name, info.email, info.phone)) {
            fillPersonalInfo(info);
            navigate("plan");
        }
    }

    const validate = (name: string, email: string, phone: string): boolean => {
        let nameError = null; 
        let emailError = null; 
        let phoneError = null;
        const emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (!name) nameError = "This field is required";

        if (!email) emailError = "This field is required";
        else if (!email.match(emailFormat)) emailError = "Incorrect email";

        const [plus, ...others] = phone.split('');
        if (!phone) phoneError = "This field is required";
        else if (plus !== "+" || others.some(number => isNaN(parseFloat(number)))) {
            phoneError = "Incorrect phone number";
        }

        if (nameError || emailError || phoneError) {
            const errors: ErrorFields = {
                name: nameError,
                email: emailError,
                phone: phoneError
            };
            setValidator(errors);

            return false;
        }

        return true;
    }

    return (
        <>
            <h1 className='mb-2 font-bold text-4xl text-blue-900'>Personal info</h1>
            <p className='mb-8 text-gray-400'>
                Please provide your name, email address and phone number.
            </p>

            <form className='flex-auto flex flex-col gap-y-6' onSubmit={submitHandler}>
                <FormControl 
                    id="name" 
                    title="Name"
                    defaultValue={personalInfo ? personalInfo.name : ""} 
                    placeholder="e.g. Stephen King" 
                    error={validator.name && validator.name} 
                />
                <FormControl 
                    id="email" 
                    title="Email Address"
                    defaultValue={personalInfo ? personalInfo.email : ""} 
                    placeholder="e.g. stephenking@lorem.com" 
                    error={validator.email && validator.email} 
                />
                <FormControl 
                    id="phone" 
                    title="Phone Number"
                    defaultValue={personalInfo ? personalInfo.phone : ""} 
                    placeholder="e.g. +1 234 567 890" 
                    error={validator.phone && validator.phone}
                />

                <div className="mt-auto flex justify-end">
                    <button 
                        type="submit"
                        className="w-[130px] h-[50px] bg-blue-900 rounded-lg flex justify-center items-center text-white hover:bg-blue-700"
                    >
                        Next Step
                    </button>
                </div>
            </form>
        </>
    )
}

export default InfoPage;