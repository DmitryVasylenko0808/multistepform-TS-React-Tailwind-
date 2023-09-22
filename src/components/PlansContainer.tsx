import React from "react";
import PlanCard from "./PlanCard";
import { Period, PlanWithCardState } from "../types";

type PlansContainerProps = {
    plans: PlanWithCardState[];
    period: Period;
    onActivePlan: (id: number) => void;
}

const PlansContainer = ({ plans, period, onActivePlan }: PlansContainerProps) => {
    return (
        <div className="mb-8 flex gap-x-5">
            {plans.map(p => <PlanCard {...p} period={period} onActive={() => onActivePlan(p.id)} />)}
        </div>
    )
}

export default PlansContainer;