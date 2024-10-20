import React from 'react';

export const Header = ({ children }) => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <a className='navbar-brand' href='/'>
        Limio Code Test Sandbox
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <div className='form-inline my-2 my-lg-0'>{children}</div>
      </div>
    </nav>
  );
};
