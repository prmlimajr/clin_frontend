import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Patients from '../pages/Patients';
import Users from '../pages/Users';
import PatientsRegister from '../pages/Patients/PatientsRegister';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/register' component={SignUp} />
        <PrivateRoute path='/main' component={Dashboard} />
        <PrivateRoute path='/patients' component={Patients} />
        <PrivateRoute path='/users' component={Users} />
        <PrivateRoute path='/patient-register' component={PatientsRegister} />
      </Switch>
    </BrowserRouter>
  );
}
