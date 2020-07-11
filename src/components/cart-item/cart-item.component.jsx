import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({item : {quantity, price, name, imageUrl}}) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item'/>
        <div className='item-details'>
            <span className='name'>
                {name}
            </span>
            <span className='price'>
                {quantity} x Kshs{price}
            </span>
        </div>
    </div>
);

export default CartItem;