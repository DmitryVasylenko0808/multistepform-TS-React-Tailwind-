import React from 'react';
import { Link } from "react-router-dom";
import SelectedAddon from "../components/SelectAddOn";

const SelectInfoBlock = () => {
    return (
        <>
            <div className="mb-7 px-6 py-4 bg-sky-50 rounded-md flex flex-col gap-y-6">
                <div className="flex justify-between items-center">
                    <div className="">
                        <h2 className="font-bold text-lg text-blue-900">{`Arcade (Monthly)`}</h2>
                        <Link to={'/'} className="text-gray-400 underline hover:text-indigo-600">Change</Link>
                    </div>
                    <span className="font-bold text-lg text-blue-900">$9/mo</span>
                </div>
                <hr className="" />
                <SelectedAddon />
                <SelectedAddon />
            </div>

            <div className="px-6 flex justify-between items-center text-gray-400">
                <span className="">{`Total (per month)`}</span>
                <span className="font-bold text-2xl text-indigo-600">12$/mo</span>
            </div>
        </>
    );
}

export default SelectInfoBlock;
