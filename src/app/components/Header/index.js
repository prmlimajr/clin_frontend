import React from 'react';
import { useHistory } from 'react-router-dom';

import { userSignOut } from '../../../api/users';

import './Header.css';

export default function Header() {
  const history = useHistory();

  function handleSignOut() {
    userSignOut();
    history.push('/');
  }
  return (
    <header>
      <span onClick={handleSignOut}>Oi, Paulo - Sair</span>
    </header>
  );
}
