import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { userSignUp } from '../../../../api/users';

import ChevronLeft from '../../../../assets/img/chevron-left.svg';

import './UsersRegister.css';

export default class UsersRegister extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = this.state;

    await userSignUp({ name, confirmPassword, password, email });

    this.props.history.push('/users');
  };

  render() {
    return (
      <>
        <div className='patients'>
          <div className='patientsTitle'>
            <Link to='/users' className='back'>
              <img src={ChevronLeft} alt='Voltar' />
              <h1>CADASTRAR USUÁRIO</h1>
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
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              required
              className='inputForm'
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <label htmlFor='password'>Senha</label>
            <input
              type='password'
              required
              className='inputForm'
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <label htmlFor='confirmPassword'>Confirmar senha</label>
            <input
              type='password'
              required
              className='inputForm'
              onChange={(e) =>
                this.setState({ confirmPassword: e.target.value })
              }
            />

            <button type='submit'>CADASTRAR</button>
          </form>
        </div>
      </>
    );
  }
}
