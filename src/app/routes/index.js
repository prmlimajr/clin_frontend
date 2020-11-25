import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Patients from '../pages/Patients';
import Users from '../pages/Users';
import UsersRegister from '../pages/Users/UsersRegister';
import UserDetail from '../pages/Users/UserDetail';
import PatientsRegister from '../pages/Patients/PatientsRegister';
import PatientDetail from '../pages/Patients/PatientDetail';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/register' component={SignUp} />
        <PrivateRoute path='/main' component={Dashboard} />
        <PrivateRoute path='/patients' exact component={Patients} />
        <PrivateRoute path='/users' exact component={Users} />
        <PrivateRoute path='/user-register' component={UsersRegister} />
        <PrivateRoute path='/users/:id' component={UserDetail} />
        <PrivateRoute path='/patient-register' component={PatientsRegister} />
        <PrivateRoute path='/patients/:id' component={PatientDetail} />
      </Switch>
    </BrowserRouter>
  );
}
