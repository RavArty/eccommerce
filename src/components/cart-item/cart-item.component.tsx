import React from 'react';
import { ITypeData } from '../collection-item/collection-item.component';
import './cart-item.styles.scss';

interface ICartItemProps {
  item: ITypeData;
}

const CartItem = ({
  item: { imageUrl, price, name, quantity }
}: ICartItemProps): JSX.Element => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
