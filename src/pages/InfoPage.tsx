import React from "react";
import FormControl from "../components/FormControl";

const InfoPage = () => {
    return (
        <>
            <h1 className='mb-2 font-bold text-4xl text-blue-900'>Personal info</h1>
            <p className='mb-8 text-gray-400'>
                Please provide your name, email address and phone number.
            </p>

            <form className='flex-auto flex flex-col gap-y-6'>
                <FormControl 
                    id="name" 
                    title="Name" 
                    placeholder="e.g. Stephen King" 
                    error="This field is required" 
                />
                <FormControl 
                    id="email" 
                    title="Email Address" 
                    placeholder="e.g. stephenking@lorem.com" 
                    error="This field is required" 
                />
                <FormControl 
                    id="phone" 
                    title="Phone Number" 
                    placeholder="e.g. +1 234 567 890" 
                    error="This field is required" 
                />

                <div className="mt-auto flex justify-end">
                    <button 
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