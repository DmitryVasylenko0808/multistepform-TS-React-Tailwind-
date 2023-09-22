import React, { createContext } from 'react';
import { useState, useEffect } from "react"
import { Route, Routes, useLocation } from 'react-router';
import InfoPage from '../pages/InfoPage';
import PlanPage from '../pages/PlanPage';
import AddOnsPage from '../pages/AddOnsPage';
import SummaryPage from '../pages/SummaryPage';
import SideBar from './SideBar';
import Container from './Container';
import Block from './Block';

import { Addon, 
  Data, 
  DataContextType, 
  Period, 
  PersonalInfo, 
  Plan, 
  Step
} from '../types';

export const DataContext = createContext<DataContextType | null>(null);

const App = () => {
  const [data, setData] = useState<Data>({} as Data);
  const [steps, setSteps] = useState<Step[]>([]);
  const location = useLocation();
  
  useEffect(() => {
    let steps: Step[] = [
      { id: 1, urlPath: '/', title: "Your info", active: false },
      { id: 2, urlPath: '/plan', title: "Select plan", active: false },
      { id: 3, urlPath: '/add-ons', title: "Add-ons", active: false },
      { id: 4, urlPath: '/summary', title: "Summary", active: false }
    ];

    steps = steps.map(s => {
      if (s.urlPath === location.pathname) return { ...s, active: true };
      else return s;
    })

    setSteps(steps);
  }, [location.pathname])

  const fillPersonalInfo = (personalInfo: PersonalInfo): void => {
    setData({ ...data, personalInfo });
  }

  const addPlan = (plan: Plan, period: Period): void => {
    setData({ ...data, plan, billing: period });
  }

  const putAddons = (addons: Addon[]): void => {
    setData({ ...data, addons });
  }

  return (
    <DataContext.Provider value={{ ...data, fillPersonalInfo, addPlan, putAddons }}>
      <Container>
        <SideBar steps={steps} />
        <Block>
          <Routes>
            <Route index path='/' element={<InfoPage />} />
            <Route path='/plan' element={<PlanPage />} />
            <Route path='/add-ons' element={<AddOnsPage />} />
            <Route path='/summary' element={<SummaryPage />} />
          </Routes>
        </Block>
      </Container>
    </DataContext.Provider>
  );
}

export default App;
