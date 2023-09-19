import React from "react";
import PlanCard from "./PlanCard";

const PlansContainer = () => {
    const array = [1, 2, 3];

    return (
        <div className="mb-8 flex gap-x-5">
            {array.map(item => <PlanCard />)}
        </div>
    )
}

export default PlansContainer;