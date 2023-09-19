import React from 'react';
import { Route, Routes } from 'react-router';
import InfoPage from '../pages/InfoPage';
import PlanPage from '../pages/PlanPage';
import AddOnsPage from '../pages/AddOnsPage';
import SummaryPage from '../pages/SummaryPage';
import SideBar from './SideBar';
import Container from './Container';
import Block from './Block';

const App = () => {
  return (
    <Container>
      <SideBar />
      <Block>
        <Routes>
          <Route index path='/' element={<InfoPage />} />
          <Route path='/plan' element={<PlanPage />} />
          <Route path='/add-ons' element={<AddOnsPage />} />
          <Route path='/summary' element={<SummaryPage />} />
        </Routes>
      </Block>
    </Container>
  );
}

export default App;
