import React from "react";
import { Step } from "../types";
import StepItem from "./StepItem";
import { useLocation } from "react-router";

type SideBarProps = {
    steps: Step[]
}

const SideBar = ({ steps }: SideBarProps) => {
    const location = useLocation();

    console.log(location.pathname);

    return (
        <div className='flex-[0_0_274px] bg-sidebar bg-no-repeat bg-cover py-7 px-8'>
            {steps.map(s => <StepItem {...s} key={s.id} />)}
        </div>
    )
}

export default SideBar;