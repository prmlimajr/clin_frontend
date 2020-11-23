import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
    self: null,
    relative: '',
    healthConditions: [],
  };

  handleHealthConditions = (e) => {
    e.preventDefault();
    this.setState({
      healthConditions: [...this.state.healthConditions, this.state.condition],
      condition: '',
      self: null,
    });
  };

  render() {
    console.log(this.state);
    const { healthConditions } = this.state;
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
          <form id='patientsForm'>
            <label htmlFor='name'>Nome</label>
            <input
              type='text'
              id='name'
              className='inputForm'
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label htmlFor='birthday'>Data de nascimento</label>
            <input
              type='date'
              id='birthday'
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
              className='inputForm'
              onChange={(e) => this.setState({ cpf: e.target.value })}
            />

            <h4>Histórico de saúde:</h4>

            <label htmlFor='healthCondition'>Adicionar comorbidade</label>
            <div className='addHealthCond'>
              <input
                type='text'
                id='healthCondition'
                className='inputForm'
                value={this.state.condition}
                onChange={(e) => this.setState({ condition: e.target.value })}
              />
              <button onClick={(e) => this.handleHealthConditions(e)}>
                <img src={Plus} alt='Adicionar' />
              </button>
            </div>
            <div className='gender'>
              <input
                type='radio'
                id='itself'
                name='self'
                value={1}
                onChange={(e) => this.setState({ self: e.target.value })}
              />
              <label for='itself'>O próprio</label>
              <input
                type='radio'
                id='relative'
                name='self'
                value={2}
                onChange={(e) => this.setState({ self: e.target.value })}
              />
              <label for='relative'>Membro da família</label>
            </div>
            {this.state.self === 2 && (
              <>
                <label htmlFor='relative'></label>
                <input
                  type='text'
                  id='relative'
                  className='inputForm'
                  onChange={(e) => this.setState({ relative: e.target.value })}
                />
              </>
            )}

            <ul>
              {healthConditions.map((row) => {
                return (
                  <li key={Math.random()}>
                    {row} - {this.handleConditionOwner} -{' '}
                    <img src={TrashCan} alt='apagar' />
                  </li>
                );
              })}
            </ul>
            <button type='submit'>CADASTRAR</button>
          </form>
        </div>
      </>
    );
  }
}

export default PatientsRegister;
