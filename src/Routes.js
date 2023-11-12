import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';
import App from './App';
import _ from 'lodash';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/*' element={<Navigate to='/' replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
