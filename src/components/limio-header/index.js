import React, { useState, useEffect } from 'react';
import BasketButton from './components/BasketButton';
import { useSelector } from 'react-redux';

import './index.css';

export const LimioHeader = () => {
  const [basket, setBasket] = useState([]);

  let amount = useSelector((state) => state.value); // Get the amount from the Redux store

  useEffect(() => {
    setBasket((prevBasket) => {
      const filteredBasket = prevBasket.filter((item) => !Array.isArray(item)); // My addToBasket action pushes an array to the state. This filters out the arrays and uodates with the latest amount.

      return [...filteredBasket, amount];
    });
  }, [amount]); // Amount pulls in the state from Redux on page render. If the amount changes, the basket state is updated.

  return (
    <nav className={'navbar navbar-expand-lg navbar-light shadow'}>
      <input type='checkbox' id='navbar-toggle-cbox' />
      <a className='navbar-brand' href={'/'}>
        <img
          src={
            'https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_auto/1156184/637770_576700.png'
          }
          alt='Header logo'
        />
      </a>
      <BasketButton mobile={true} basket={basket} />{' '}
      {/* Pass the basket state to the BasketButton component */}
      <label
        htmlFor='navbar-toggle-cbox'
        className='navbar-toggler collapsed'
        data-toggle='collapse'
        data-target='#navbar'
        aria-expanded='false'
        aria-controls='navbar'
      >
        <span className='navbar-toggler-icon' />
      </label>
    </nav>
  );
};

export default LimioHeader;
