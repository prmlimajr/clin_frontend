import React, { Component } from 'react';
import Settings from '../../../assets/img/settings.svg';
import Edit from '../../../assets/img/edit.svg';
import TrashCan from '../../../assets/img/trash-2.svg';

import './UserCard.css';

export default class UserCard extends Component {
  render() {
    return (
      <div
        className={this.props.admin ? 'adminCard' : 'userCard'}
        isAdmin={this.props.admin}
      >
        <h1>{this.props.name}</h1>

        <div className='settings'>
          <img
            src={Settings}
            alt='administrar'
            onClick={this.props.handleAdmin}
          />
          <img src={Edit} alt='editar' onClick={this.props.handleEdit} />
          <img src={TrashCan} alt='apagar' onClick={this.props.handleDelete} />
        </div>
      </div>
    );
  }
}
