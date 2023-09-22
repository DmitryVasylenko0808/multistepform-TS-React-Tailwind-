export type Step = {
    id: number;
    urlPath: string;
    title: string;
    active: boolean;
}

export type PersonalInfo = {
    name: string;
    email: string;
    phone: string;
}

export type Plan = {
    id: number,
    title: string;
    bill: number;
}

export type PlanWithCardState = Plan & { 
    icon: string,
    isActive: boolean;
}; 

export type Addon = {
    id: number;
    title: string;
    description: string;
    bill: number;
}

export type AddonWithState = Addon & { isActive: boolean };

export type Period = "Monthly" | "Yearly";

export type Data = {
    personalInfo: PersonalInfo;
    plan: Plan;
    addons: Addon[];
    billing: Period;
}

export type DataContextType = Data & {
    fillPersonalInfo: (info: PersonalInfo) => void;
    addPlan: (plan: Plan, period: Period) => void;
    putAddons: (addons: Addon[]) => void;
}