import React from 'react';
import { Addon, Period } from '../types';

type SelectAddOnProps = Addon & {
    period: Period;
};

const SelectedAddon = ({ title, bill, period }: SelectAddOnProps) => {
    return (
        <div className="flex justify-between items-center text-gray-400">
            <span className="">{title}</span>
            <span className="font-bold text-blue-900">{`+${bill}$/${period === "Monthly" ? "mo" : "yr"}`}</span>
        </div>
    );
}

export default SelectedAddon;
