import React, { useState, useEffect, useContext } from "react";
import AddOnsContainer from "../components/AddOnsContainer";
import { Addon, AddonWithState, DataContextType } from "../types";
import { DataContext } from "../components/App";
import { Navigate, useNavigate } from "react-router";

const AddOnsPage = () => {
    const [addonCards, setAddonCards] = useState<AddonWithState[]>([]);
    const { personalInfo, plan, addons, billing, putAddons } = useContext(DataContext) as DataContextType;
    const navigate = useNavigate();

    useEffect(() => {
        let addonCards: AddonWithState[] = [
            {
                id: 1,
                title: "Online service",
                description: "Access to multiplayer games",
                bill: billing === "Monthly" ? 1 : 10,
                isActive: false
            },
            {
                id: 2,
                title: "Larger storage",
                description: "Extra 1TB of cloud save",
                bill: billing === "Monthly" ? 2 : 20,
                isActive: false
            },
            {
                id: 3,
                title: "Customizable profile",
                description: "Custom theme on your profile",
                bill: billing === "Monthly" ? 2 : 20,
                isActive: false
            }
        ];

        if (addons) {
            addonCards = setBeforeActiveAddons(addonCards, addons);
        }

        setAddonCards(addonCards);
    }, []);

    const setBeforeActiveAddons = (addonCards: AddonWithState[], activeAddons: Addon[]) => {
        const addonsIds = activeAddons.map(a => a.id);
        addonCards = addonCards.map(a => {
            if (addonsIds.includes(a.id)) {
                return { ...a, isActive: true }
            } else {
                return a;
            }
        });

        return addonCards;
    }   

    const toggleAddon = (id: number, e: React.ChangeEvent<HTMLInputElement>): void => {
        setAddonCards(addonCards.map(a => {
            if (a.id === id) return { ...a, isActive: e.target.checked };
            else return a;
        }))
    }

    const goBackHandler = () => navigate(-1);

    const goNextHandler = (): void => {
        let selectedAddons: Addon[] = addonCards
            .filter(a => a.isActive === true)
            .map(a => {
                return {
                    id: a.id,
                    title: a.title,
                    description: a.description,
                    bill: a.bill
                }
        })
        putAddons(selectedAddons);
        navigate("/summary");
    }

    if (!personalInfo || !plan) return <Navigate to="/" />

    return (
        <>
            <h1 className='mb-2 font-bold text-4xl text-blue-900'>Select your plan</h1>
            <p className='mb-8 text-gray-400'>
                You have the option of monthly of yearly billing.
            </p>

            <AddOnsContainer addons={addonCards} period={billing} onToggle={toggleAddon} />

            <div className="mt-auto flex justify-between">
                <button onClick={goBackHandler} className="text-gray-400 font-bold">
                    Go Back
                </button>
                <button
                    onClick={goNextHandler}
                    className="w-[130px] h-[50px] bg-blue-900 rounded-lg flex justify-center items-center text-white hover:bg-blue-700"
                >
                    Next Step
                </button>
            </div>
        </>
    )
}

export default AddOnsPage;