import React from "react";
import { AddonWithState, Period } from "../types";


type AddOnItemProps = AddonWithState & {
    period: Period;
    onToggle: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddOnItem = ({ id, title, description, bill, isActive, period, onToggle }: AddOnItemProps) => {
    return (
        <div className="flex items-center px-4 py-4 border rounded-lg border-gray-300">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                    className="addon-checkbox addon-checkbox-before addon-checkbox-checked hover:cursor-pointer"
                    type="checkbox"
                    id="checkboxNoLabel"
                    aria-label="..."
                    checked={isActive}
                    onChange={(e) => onToggle(id, e)}
                    />
            </div>
            <div className="ml-5">
                <h2 className="font-bold text-blue-900">{title}</h2>
                <p className="text-gray-400">{description}</p>
            </div>
            <span className="ml-auto font-bold text-indigo-600">{`+$${bill}/${period === "Monthly" ? "mo" : "yr"}`}</span>
        </div>
    )
}

export default AddOnItem;