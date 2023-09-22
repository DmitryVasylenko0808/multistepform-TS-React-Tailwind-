import React from "react";
import AddOnItem from "./AddOnItem";
import { AddonWithState, Period } from "../types";

type AddOnsContainerProps = {
    addons: AddonWithState[];
    period: Period;
    onToggle: (id: number, e: React.ChangeEvent<HTMLInputElement>) => void
}

const AddOnsContainer = ({ addons, period, onToggle }: AddOnsContainerProps) => {
    return (
        <div className="flex flex-col gap-y-4">
            {addons.map(a => <AddOnItem {...a} period={period} onToggle={onToggle} />)}
        </div>
    )
}

export default AddOnsContainer;