import React from 'react';
import PlusCircle from '../../../assets/img/plus-circle.svg';

export default function SeeMoreButton() {
  return (
    <button type='submit'>
      <img src={PlusCircle} alt='Ver mais' />
    </button>
  );
}
