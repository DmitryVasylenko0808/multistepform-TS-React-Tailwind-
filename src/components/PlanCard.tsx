import React from "react";
import { Period, PlanWithCardState } from "../types";

type PlanCardPRops = PlanWithCardState & { 
    period: Period;
    onActive: () => void;
}

const PlanCard = ({ title, bill, icon, isActive, period, onActive }: PlanCardPRops) => {
    const activated = isActive ? "bg-sky-50 border-indigo-400" : "";

    return (
        <div onClick={onActive} 
            className={`flex-1 h-[160px] border rounded-lg border-gray-300 px-3 pt-4 pb-2 flex flex-col cursor-pointer hover:border-indigo-400 ${activated}`}>
            <img src={window.location.origin + icon} alt={title} className="w-[40px] h-[40px]"/>
            <div className="mt-auto">
                <h2 className="font-bold text-blue-900">{title}</h2>
                <p className="text-gray-400">{`$${bill}/${period === "Monthly" ? "mo" : "yr"}`}</p>
            </div>
        </div>
    )
}

export default PlanCard;