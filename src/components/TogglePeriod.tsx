import React from 'react';
import { Period } from '../types';

type TogglePeriodProps = {
    period: Period;
    onToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TogglePeriod = ({ period, onToggle }: TogglePeriodProps) => {
    let value;
    if (period === "Monthly") value = false;
    else value = true;
    
    return (
        <div className="py-3 bg-sky-50 rounded-lg flex justify-center">
            <div className="flex items-center gap-x-4 font-bold text-blue-900">
                Monthly
                <input
                    className="toggle-period toggle-period-after toggle-period-checked hover:cursor-pointer"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault01"
                    aria-label='...'
                    checked={value}
                    onChange={onToggle}
                />
                Yearly
            </div>
        </div>
    );
}

export default TogglePeriod;
