import React from "react";
import SelectInfoBlock from "../components/SelectInfoBlock";
import Success from "../components/Success";

const SummaryPage = () => {
    const flag = true;

    if (flag) {
        return <Success />
    }

    return (
        <>
            <h1 className='mb-2 font-bold text-4xl text-blue-900'>Finishing up</h1>
            <p className='mb-8 text-gray-400'>
                Double-check everything looks OK before confirming.
            </p>

            <SelectInfoBlock />

            <div className="mt-auto flex justify-between">
                <button className="text-gray-400 font-bold">
                    Go Back
                </button>
                <button
                    className="w-[130px] h-[50px] bg-indigo-600 rounded-lg flex justify-center items-center text-white hover:opacity-70"
                >
                    Confirm
                </button>
            </div>
        </>
    )
}

export default SummaryPage;