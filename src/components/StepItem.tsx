import React from "react";
import { Step } from "../types";

type StepItemProps = Step;

const StepItem = ({ id, title, active }: StepItemProps) => {
    const activated = active ? "bg-sky-50 text-blue-900" : "text-white";

    return (
        <div className='mb-5 last:mb-0 flex items-center gap-x-4'>
            <div className={`w-[38px] h-[38px] border rounded-full flex justify-center items-center font-bold ${activated}`}>
                {id}
            </div>
            <div className='flex flex-col'>
                <span className='font-normal text-slate-200'>{`STEP ${id}`}</span>
                <span className='font-bold text-white tracking-widest'>{title.toUpperCase()}</span>
            </div>
        </div>
    )
}

export default StepItem;