import React, { useState, useContext } from "react";
import SelectInfoBlock from "../components/SelectInfoBlock";
import Success from "../components/Success";
import { DataContext } from "../components/App";
import { DataContextType } from "../types";
import { Navigate, useNavigate } from "react-router";

const SummaryPage = () => {
    const [flag, setFlag] = useState<boolean>(false);
    const { personalInfo, plan, addons, billing } = useContext(DataContext) as DataContextType;
    const navigate = useNavigate();

    const confirmHandler = () => {
        setFlag(true);
    }

    const goBackHandler = () => navigate(-1);

    if (!personalInfo || !plan || !addons) return <Navigate to="/" />;

    if (flag) {
        return <Success />
    }

    return (
        <>
            <h1 className='mb-2 font-bold text-4xl text-blue-900'>Finishing up</h1>
            <p className='mb-8 text-gray-400'>
                Double-check everything looks OK before confirming.
            </p>

            <SelectInfoBlock plan={plan} addons={addons} period={billing}  />

            <div className="mt-auto flex justify-between">
                <button onClick={goBackHandler} className="text-gray-400 font-bold">
                    Go Back
                </button>
                <button
                    onClick={confirmHandler}
                    className="w-[130px] h-[50px] bg-indigo-600 rounded-lg flex justify-center items-center text-white hover:opacity-70"
                >
                    Confirm
                </button>
            </div>
        </>
    )
}

export default SummaryPage;