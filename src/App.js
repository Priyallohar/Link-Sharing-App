import React from 'react'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login'
import Createaccount from './Components/Createaccount/Createaccount'
import DashboardHeader from './Components/devlinksdashboard/DashboardHeader/DashboardHeader';
import Dashboard from './Components/devlinksdashboard/Dashboard/Dashboard';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/createaccount" element={<Createaccount />} />
    //     <Route path="/dashboard" element={<Dashboard/>} />
    //   </Routes>
    // </BrowserRouter>
    <div>
<Dashboard></Dashboard>

    </div>
  );
};

export default App