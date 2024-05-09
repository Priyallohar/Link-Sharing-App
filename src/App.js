import React from 'react'
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Login from './Components/Login/Login'
import Createaccount from './Components/Createaccount/Createaccount'
import Dashboard from './Components/devlinksdashboard/Dashboard/Dashboard';
import ProfileDetails from "./Components/devlinksdashboard/ProfileDetails/ProfileDetails"
import Links from './Components/devlinksdashboard/Links/Links';
import Preview from './Components/devlinksdashboard/Preview/Preview';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createaccount" element={<Createaccount />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/profile" component={<ProfileDetails/>} />
      <Route path="/preview" component={<Preview/>} />
      <Route path="/link" component={<Links/>} />
      </Routes>
    </BrowserRouter>
//     <div>
// <Dashboard></Dashboard>

//     </div>
  );
};

export default App