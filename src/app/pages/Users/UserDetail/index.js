import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getUser, updateUser } from '../../../../api/users';

import ChevronLeft from '../../../../assets/img/chevron-left.svg';

import './UserDetail.css';

class UserDetail extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
  };

  componentDidMount = async () => {
    const id = this.props.match.params.id;
    const user = await getUser(id);
    console.log(user);

    this.setState({
      name: user.name,
      email: user.email,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const userId = this.props.match.params.id;
    const { name, email, password, newPassword, confirmPassword } = this.state;

    await updateUser(userId, {
      name,
      email,
      password,
      newPassword,
      confirmPassword,
    });
  };

  render() {
    console.log('estado', this.state);
    return (
      <>
        <div className='patients'>
          <div className='patientsTitle'>
            <Link to='/users' className='back'>
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
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={this.state.email}
              className='inputForm'
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <label htmlFor='password'>Senha</label>
            <input
              type='password'
              id='password'
              value={undefined}
              className='inputForm'
              onChange={(e) => this.setState({ password: e.target.value })}
            />

            {this.state.password && (
              <>
                <label htmlFor='newPassword'>Nova senha</label>
                <input
                  type='password'
                  id='newPassword'
                  className='inputForm'
                  onChange={(e) =>
                    this.setState({ newPassword: e.target.value })
                  }
                />
                <label htmlFor='confirmPassword'>Confirmar senha</label>
                <input
                  type='password'
                  id='confirmPassword'
                  className='inputForm'
                  onChange={(e) =>
                    this.setState({ confirmPassword: e.target.value })
                  }
                />
              </>
            )}

            <button type='submit'>ATUALIZAR DADOS</button>
          </form>
        </div>
      </>
    );
  }
}

export default UserDetail;
