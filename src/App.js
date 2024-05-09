mport React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Login from './Components/Login/Login';
import Createaccount from './Components/Createaccount/Createaccount';
import DashboardHeader from './Components/devlinksdashboard/DashboardHeader/DashboardHeader';
import Dashboard from './Components/devlinksdashboard/Dashboard/Dashboard';
import ProfileDetails from './Components/devlinksdashboard/ProfileDetails/ProfileDetails';
import Links from './Components/devlinksdashboard/Links/Links';
import Preview from './Components/devlinksdashboard/Preview/Preview';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<ProfileDetails />} />
          <Route path="preview" element={<Preview />} />
          <Route path="link" element={<Links />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;