import React, { Component } from 'react';
import Button from '../../components/Button';

import UserCard from '../../components/UserCard';
import ChevronLeft from '../../../assets/img/chevron-left.svg';
import Search from '../../../assets/img/search.svg';
import Plus from '../../../assets/img/plus.svg';
import PlusCircle from '../../../assets/img/plus-circle.svg';

import { getUsers, deleteUser, adminUser } from '../../../api/users';

import './Users.css';
import { Link } from 'react-router-dom';

class Users extends Component {
  state = {
    search: '',
    page: 1,
    perPage: 15,
    users: [],
  };

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    this.callSearch(e.target.value);
  };

  callSearch = async (value) => {
    const { page, perPage } = this.state;

    const users = await getUsers({ search: value, page: 1, perPage });

    this.setState({
      users,
    });
  };

  onClickIncreaseListLimit = async () => {
    const listParams = this.state;

    const page = listParams.page + 1;

    const newUsers = await getUsers({
      ...listParams,
      page: listParams.page + 1,
    });

    this.setState({
      users: [...this.state.users, ...newUsers],
      page,
    });
    console.log(this.state.users);
  };

  componentDidMount = async () => {
    const { search, page, perPage } = this.state;

    const users = await getUsers({ search, page, perPage });

    this.setState({
      users,
    });
  };

  addUser = () => {
    this.props.history.push('/user-register');
  };

  handleDelete = async (id) => {
    await deleteUser(id);

    const { search, page, perPage } = this.state;

    const users = await getUsers({ search, page, perPage });

    this.setState({
      users,
    });
  };

  handleEdit = (id) => {
    this.props.history.push(`/users/${id}`);
  };

  handleAdmin = async (id) => {
    await adminUser(id);

    const { search, page, perPage } = this.state;

    const users = await getUsers({ search, page, perPage });

    this.setState({
      users,
    });
  };

  render() {
    console.log(this.state.users);
    return (
      <>
        <div className='users'>
          <div className='usersTitle'>
            <Link to='/main' className='back'>
              <img src={ChevronLeft} alt='Voltar' />
              <h1>USUÁRIOS</h1>
            </Link>
          </div>
          <div className='searchBar'>
            <img src={Search} alt='Buscar' className='inputSearch' />
            <input
              type='text'
              className='search'
              placeholder='Buscar'
              onChange={this.onSearchChange}
            />
            <Button
              logo={Plus}
              handleClick={(e) => this.addUser(e)}
              content='CADASTRAR'
            />
          </div>
        </div>

        <div className='data'>
          {this.state.users.map((user) => {
            return (
              <div className='row'>
                <UserCard
                  key={user.id}
                  name={user.name.toUpperCase()}
                  email={user.email}
                  admin={user.admin}
                  handleDelete={() => this.handleDelete(user.id)}
                  handleEdit={() => this.handleEdit(user.id)}
                  handleAdmin={() => this.handleAdmin(user.id)}
                />
              </div>
            );
          })}

          <button onClick={() => this.onClickIncreaseListLimit()}>
            <img src={PlusCircle} alt='Ver mais' /> Ver mais
          </button>
        </div>
      </>
    );
  }
}

export default Users;
