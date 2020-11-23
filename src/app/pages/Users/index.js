import React from 'react';
import Button from '../../components/Button';
import SeeMoreButton from '../../components/SeeMoreButton';
import UserCard from '../../components/UserCard';
import ChevronLeft from '../../../assets/img/chevron-left.svg';
import Search from '../../../assets/img/search.svg';
import Plus from '../../../assets/img/plus.svg';

import './Users.css';
import { Link } from 'react-router-dom';

export default function Users() {
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
          <input type='text' className='search' />
          <Button logo={Plus} content='CADASTRAR' />
        </div>
      </div>

      <div className='data'>
        <UserCard name='Paulo Lima' admin={true} />
        <UserCard name='Paulo Lima' admin={true} />
        <UserCard name='Paulo Lima' admin={true} />
        <UserCard name='Paulo Lima' admin={false} />
        <UserCard name='Paulo Lima' admin={false} />
        <UserCard name='Paulo Lima' admin={false} />
        <UserCard name='Paulo Lima' admin={false} />
        <UserCard name='Paulo Lima' admin={false} />
        <UserCard name='Paulo Lima' admin={false} />
        <SeeMoreButton />
      </div>
    </>
  );
}
