import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getUser, updateUser } from '../../../../api/users';

import ChevronLeft from '../../../../assets/img/chevron-left.svg';
import Plus from '../../../../assets/img/plus.svg';
import TrashCan from '../../../../assets/img/trash-2.svg';

import './UserDetail.css';

class UserDetail extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const patient = await getUser(id);

    this.setState({
      name: patient.name,
      cpf: patient.cpf,
      genderId: patient.genderId,
      birthday: patient.birthday,
      healthConditions: [...patient.conditions],
    });
  };

  handleHealthConditions = async (e) => {
    e.preventDefault();
    if (this.state.condition === '') {
      return;
    }

    const patientId = this.props.match.params.id;
    await createCondition(patientId, {
      description: this.state.condition,
      relative: this.state.self,
    });

    this.setState({
      healthConditions: [...this.state.healthConditions, this.state.condition],
      condition: '',
      self: null,
    });

    document.location.reload();
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const patientId = this.props.match.params.id;
    const { name, birthday, genderId, cpf } = this.state;

    await updateUser(patientId, { name, birthday, genderId, cpf });
    handleDeleteCondition = async (e, id) => {
      e.preventDefault();

      await users(id);

      const patientId = this.props.match.params.id;
      const patient = await getUser(patientId);

      this.setState({
        name: patient.name,
        cpf: patient.cpf,
        genderId: patient.genderId,
        birthday: patient.birthday,
        healthConditions: [...patient.conditions],
      });
    };
  };

  render() {
    console.log('estado', this.state);
    return (
      <>
        <div className='patients'>
          <div className='patientsTitle'>
            <Link to='/patients' className='back'>
              <img src={ChevronLeft} alt='Voltar' />
              <h1>{this.state.name}</h1>
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
              className='inputForm'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <label htmlFor='birthday'>Data de nascimento</label>
            <input
              type='date'
              id='birthday'
              value={this.state.birthday}
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
              value={this.state.cpf}
              className='inputForm'
              onChange={(e) => this.setState({ cpf: e.target.value })}
            />

            <button type='submit'>ATUALIZAR DADOS</button>
          </form>

          <form id='patientsForm  '>
            <h4>Histórico de saúde:</h4>
            <label htmlFor='condition'>Adicionar comorbidade</label>
            <div className='row'>
              <input
                type='text'
                id='condition'
                required
                className='inputForm'
                value={this.state.condition}
                onChange={(e) => this.setState({ condition: e.target.value })}
              />
              <button
                type='submit'
                id='btnAddhc'
                onClick={(e) => this.handleHealthConditions(e)}
              >
                <img src={Plus} alt='adicionar' />
              </button>
            </div>
            <div className='gender'>
              <input
                type='radio'
                id='itself'
                name='self'
                value={1}
                checked
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
            <ul className='conditionList'>
              {this.state.healthConditions.map((row) => {
                return (
                  <li key={row.id}>
                    {row.description} -{' '}
                    {row.relative === 1 ? 'O próprio' : 'Membro da família'} -{' '}
                    <img
                      src={TrashCan}
                      className='trash'
                      alt='apagar'
                      onClick={(e) => this.handleDeleteCondition(e, row.id)}
                    />
                  </li>
                );
              })}
            </ul>
          </form>
        </div>
      </>
    );
  }
}

export default UserDetail;
