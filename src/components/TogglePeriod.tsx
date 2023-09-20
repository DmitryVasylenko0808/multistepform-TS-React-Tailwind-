import React from 'react';

const TogglePeriod = () => {
    return (
        <div className="py-3 bg-sky-50 rounded-lg flex justify-center">
            <div className="flex items-center gap-x-4 font-bold text-blue-900">
                Monthly
                <input
                    className="h-[20px] w-10 appearance-none rounded-[10px] bg-blue-900 

                    

                    after:absolute after:z-[2] after:mt-[3px] after:ml-[3px] after:h-3.5 after:w-3.5 after:rounded-full 
                    after:border-none after:bg-neutral-100  
                    after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 

                    checked:bg-primary checked:after:absolute checked:after:z-[2] 
                    checked:after:mt-[3px] checked:after:ml-[23px] 
                    checked:after:h-3.5 checked:after:w-3.5 
                    checked:after:rounded-full 
                    checked:after:border-none checked:after:bg-primary
                    checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] 

                    hover:cursor-pointer"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault01"
                    aria-label='...'
                />
                Yearly
            </div>
        </div>
    );
}

export default TogglePeriod;
