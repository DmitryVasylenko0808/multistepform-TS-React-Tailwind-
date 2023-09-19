import React from "react";
import AddOnItem from "./AddOnItem";

const AddOnsContainer = () => {
    const array = [1, 2, 3];

    return (
        <div className="flex flex-col gap-y-4">
            {array.map(item => <AddOnItem />)}
        </div>
    )
}

export default AddOnsContainer;