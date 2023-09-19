import React from "react";
import AddOnsContainer from "../components/AddOnsContainer";

const AddOnsPage = () => {
    return (
        <>
            <h1 className='mb-2 font-bold text-4xl text-blue-900'>Select your plan</h1>
            <p className='mb-8 text-gray-400'>
                You have the option of monthly of yearly billing.
            </p>

            <AddOnsContainer />

            <div className="mt-auto flex justify-between">
                <button className="text-gray-400 font-bold">
                    Go Back
                </button>
                <button
                    className="w-[130px] h-[50px] bg-blue-900 rounded-lg flex justify-center items-center text-white hover:bg-blue-700"
                >
                    Next Step
                </button>
            </div>
        </>
    )
}

export default AddOnsPage;