import { Route, Routes } from 'react-router-dom';
import PlanBuilder from './PlanBuilder';

export const PlanBuilderRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<PlanBuilder />} />
    </Routes>
  );
};
