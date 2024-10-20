import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFromBasket } from '../../slice/basketSlice';
import { Header } from '../../../Header';
import LimioFooter from '../../limio-footer/index.js';
import LimioHeader from '../../limio-header/index.js';
import './index.css';

const BasketPage = () => {
  const dispatch = useDispatch();
  const initialBasket = useSelector((state) => state.value);
  const [basket, setBasket] = useState(initialBasket); // Set the initial basket state to the Redux state

  const onClick = (item) => {
    deleteItem(item); // Call the deleteItem function with the item to delete
  };

  const deleteItem = (item) => {
    // Delete the item from the Redux store and the local state
    dispatch(deleteFromBasket(item));
    setBasket(
      // Update the local state
      (prevBasket) => prevBasket.filter((toDelete) => toDelete !== item)
    );
  };

  return (
    <div>
      <Header />

      <LimioHeader />

      <div className='container'>
        <h1 className='title'>Basket</h1>
        <div className='product-list'>
          {basket?.map((item) => (
            <div className='single-product' key={item.id}>
              {/* Use a unique key for each item */}
              <h2>{item.display_name__limio}</h2>
              <h3>{item.display_price__limio}</h3>
              <button className='delete-button' onClick={() => onClick(item)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <h1 className='total'>
          Total: £
          {basket.reduce(
            (acc, item) => acc + Number(item.price__limio[0].value), // Calculate the total price of the basket
            0
          )}
        </h1>
      </div>
      <div className='footer'>
        <LimioFooter />
      </div>
    </div>
  );
};

export default BasketPage;
