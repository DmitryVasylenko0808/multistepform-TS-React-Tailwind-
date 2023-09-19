import React from "react";
import PlansContainer from "../components/PlansContainer";
import TogglePeriod from "../components/TogglePeriod";

const PlanPage = () => {
    return (
        <>
            <h1 className='mb-2 font-bold text-4xl text-blue-900'>Select your plan</h1>
            <p className='mb-8 text-gray-400'>
                You have the option of monthly of yearly billing.
            </p>

            <PlansContainer />

            <TogglePeriod />

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

export default PlanPage;