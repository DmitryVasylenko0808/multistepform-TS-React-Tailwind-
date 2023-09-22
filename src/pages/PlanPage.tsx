import React, { useState, useEffect, useContext } from "react";
import PlansContainer from "../components/PlansContainer";
import TogglePeriod from "../components/TogglePeriod";
import { DataContextType, Period, Plan, PlanWithCardState } from "../types";
import { Navigate, useNavigate } from "react-router";
import { DataContext } from "../components/App";

const PlanPage = () => {
    const [plans, setPlans] = useState<PlanWithCardState[]>([]);
    const [period, setPeriod] = useState<Period>("Monthly");
    const navigate = useNavigate();
    const { personalInfo, plan, billing, addPlan } = useContext(DataContext) as DataContextType;

    useEffect(() => {
        let plans = [
            { 
                id: 1,
                title: 'Arcade', 
                bill: 9,
                icon: "/images/icon-arcade.svg",
                isActive: false  
            },
            { 
                id: 2,
                title: 'Advanced', 
                bill: 12,
                icon: "/images/icon-advanced.svg",
                isActive: false 
            },
            { 
                id: 3,
                title: 'Pro', 
                bill: 15,
                icon: "/images/icon-pro.svg",
                isActive: false
            }
        ];

        if (plan) {
            plans = setBeforeActivePlan(plans, plan);
        } 

        if (billing) {
            setPeriod(billing);
        }

        setPlans(plans);
    }, []);

    const setBeforeActivePlan = (plans: PlanWithCardState[], plan: Plan) => {
        plans = plans.map(p => {
            if (p.id === plan.id) 
                return { 
                    ...p, 
                    bill: billing === "Yearly" ? p.bill * 10 : p.bill,
                    isActive: true 
                };
            else 
                return {
                    ...p,
                    bill: billing === "Yearly" ? p.bill * 10 : p.bill
                };
        });

        return plans;
    }

    const activePlan = (id: number): void => {
        setPlans(plans.map(p => {
            if (p.id === id) return { ...p, isActive: true };
            else return { ...p, isActive: false };
        }))
    }

    const togglePeriod = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = 10;

        if (!e.target.checked) setPeriod("Monthly");
        else setPeriod("Yearly");

        setPlans(plans.map(p => ({ ...p, bill: period !== "Monthly" ? p.bill / value : p.bill * value })))
    }

    const goBackHandler = () => navigate(-1);

    const goNextHandler = () => {
        let plan: Plan | PlanWithCardState | undefined = plans.find(p => p.isActive === true);
        if (plan) {
            plan = { id: plan.id, title: plan.title, bill: plan.bill};
            addPlan(plan, period);
            navigate("/add-ons");
        } 
    }

    if (!personalInfo) return <Navigate to="/" />

    return (
        <>
            <h1 className='mb-2 font-bold text-4xl text-blue-900'>Select your plan</h1>
            <p className='mb-8 text-gray-400'>
                You have the option of monthly of yearly billing.
            </p>

            <PlansContainer plans={plans} period={period} onActivePlan={activePlan} />

            <TogglePeriod period={period} onToggle={togglePeriod} />

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

export default PlanPage;