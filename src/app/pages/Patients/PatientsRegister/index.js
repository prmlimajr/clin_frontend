import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { newPatient } from '../../../../api/patients';

import ChevronLeft from '../../../../assets/img/chevron-left.svg';
import Plus from '../../../../assets/img/plus.svg';
import TrashCan from '../../../../assets/img/trash-2.svg';

import './PatientsRegister.css';

class PatientsRegister extends Component {
  state = {
    name: '',
    cpf: '',
    genderId: null,
    birthday: '',
    condition: '',
    relative: null,
    healthConditions: [],
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, cpf, genderId, birthday } = this.state;

    await newPatient({ name, birthday, genderId, cpf });

    this.props.history.push('/patients');
  };

  render() {
    return (
      <>
        <div className='patients'>
          <div className='patientsTitle'>
            <Link to='/patients' className='back'>
              <img src={ChevronLeft} alt='Voltar' />
              <h1>CADASTRAR PACIENTE</h1>
            </Link>
          </div>
        </div>

        <div className='patientsContainer'>
          <h4>Dados pessoais:</h4>
          <form id='patientsForm' onSubmit={this.handleSubmit}>
            <label htmlFor='name'>Nome</label>
            <input
              type='text'
              id='name'
              required
              className='inputForm'
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label htmlFor='birthday'>Data de nascimento</label>
            <input
              type='date'
              id='birthday'
              required
              className='inputForm'
              onChange={(e) => this.setState({ birthday: e.target.value })}
            />
            <div className='gender'>
              <input
                type='radio'
                id='male'
                name='gender'
                value={1}
                onChange={(e) => this.setState({ genderId: e.target.value })}
              />
              <label for='male'>Sexo masculino</label>
              <input
                type='radio'
                id='female'
                name='gender'
                value={2}
                onChange={(e) => this.setState({ genderId: e.target.value })}
              />
              <label for='female'>Sexo feminino</label>
            </div>
            <label htmlFor='cpf'>CPF</label>
            <input
              type='text'
              required
              className='inputForm'
              onChange={(e) => this.setState({ cpf: e.target.value })}
            />

            <button type='submit'>CADASTRAR</button>
          </form>
        </div>
      </>
    );
  }
}

export default PatientsRegister;
