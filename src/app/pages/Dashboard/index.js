import React from 'react';
import { Link } from 'react-router-dom';
import DashboardCard from '../../components/DashboardCard';

import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className='mainContainer'>
      <div className='dashboard'>
        <Link to='/patients'>
          <DashboardCard title='Pacientes' />
        </Link>
        <Link to='/users'>
          <DashboardCard title='Usuários' />
        </Link>
      </div>
    </div>
  );
}
