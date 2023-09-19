import React from "react";

const PlanCard = () => {
    return (
        <div className="flex-auto h-[160px] border rounded-lg border-gray-300 px-3 pt-4 pb-2 flex flex-col cursor-pointer hover:border-indigo-400">
            <img src="../../public/images/icon-arcade.svg" alt="Arcade"/>
            <div className="mt-auto">
                <h2 className="font-bold text-blue-900">Arcade</h2>
                <p className="text-gray-400">$9/mo</p>
            </div>
        </div>
    )

}



export default PlanCard;