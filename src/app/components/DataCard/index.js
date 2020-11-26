import React, { Component } from 'react';
import Edit from '../../../assets/img/edit.svg';
import TrashCan from '../../../assets/img/trash-2.svg';

import './DataCard.css';

export default class DataCard extends Component {
  render() {
    return (
      <div className='dataCard'>
        <div className='mainInfo'>
          <h3>{this.props.name}</h3>
          <small>Data de nascimento: {this.props.birthday}</small>
        </div>

        <div className='secondaryInfo'>
          <small>
            {this.props.age} anos. Sexo: {this.props.gender} - Médico:{' '}
            <h2>{this.props.doctor}</h2>
          </small>
          <div className='settings'>
            <img src={Edit} alt='editar' onClick={this.props.handleEdit} />
            <img
              src={TrashCan}
              alt='deletar'
              onClick={this.props.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}
