import React from "react";

const AddOnItem = () => {
    return (
        <div className="flex items-center px-4 py-4 border rounded-lg border-gray-300">
            <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                <input
                    className="
                    relative float-left 
                    -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[22px] w-[22px] 
                    appearance-none 
                    rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none 
                    
                    before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 
                    before:rounded-full before:bg-transparent before:opacity-0 before:content-[''] 

                    checked:border-indigo-600 checked:bg-indigo-600 checked:before:opacity-[0.16]

                    checked:after:absolute checked:after:mt-[2px] checked:after:ml-[6px] 
                    checked:after:block checked:after:h-[12px] checked:after:w-[6px] 
                    checked:after:rotate-45 
                    checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 
                    checked:after:border-solid checked:after:border-white 
                    checked:after:bg-transparent checked:after:content-[''] 

                    hover:cursor-pointer"
                    type="checkbox"
                    id="checkboxNoLabel"
                    aria-label="..."
                    />
            </div>
            <div className="ml-5">
                <h2 className="font-bold text-blue-900">Onlice service</h2>
                <p className="text-gray-400">Access to multiplayer games</p>
            </div>
            <span className="ml-auto font-bold text-indigo-600">+$1/mo</span>
        </div>
    )
}

export default AddOnItem;