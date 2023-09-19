import React from "react";
import Step from "./Step";

const SideBar = () => {
    return (
        <div className='flex-[0_0_274px] bg-sidebar bg-no-repeat bg-cover py-7 px-8'>
            <Step />
            <Step />
            <Step />
            <Step />
        </div>
    )
}

export default SideBar;