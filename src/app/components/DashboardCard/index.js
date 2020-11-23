import React, { Component } from 'react';
import UserPlus from '../../../assets/img/user-plus.svg';

import './DashboardCard.css';

export default class DashboardCard extends Component {
  render() {
    return (
      <div className='dashboardCard'>
        <div className='title'>
          <img src={UserPlus} alt='Add' />
          <h1>{this.props.title}</h1>
        </div>
        <div className='red'></div>
      </div>
    );
  }
}
