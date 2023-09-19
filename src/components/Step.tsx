import React from "react";

const Step = () => {
    return (
        <div className='mb-5 last:mb-0 flex items-center gap-x-4'>
            <div className='w-[38px] h-[38px] border rounded-full flex justify-center items-center text-white font-bold'>1</div>
            <div className='flex flex-col'>
                <span className='font-normal text-slate-200'>STEP 1</span>
                <span className='font-bold text-white tracking-widest'>YOUR INFO</span>
            </div>
        </div>
    )
}

export default Step;