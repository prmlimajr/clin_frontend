import React, { Component } from 'react';
import './Button.css';

export default class Button extends Component {
  render() {
    return (
      <button type='submit'>
        <div className='btn'>
          <div className='btn-img'>
            <img src={this.props.logo} alt='login' />
          </div>
          <div className='btn-text'>
            <span>{this.props.content}</span>
          </div>
        </div>
      </button>
    );
  }
}
