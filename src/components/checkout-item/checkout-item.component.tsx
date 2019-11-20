import React from 'react';
import { ITypeData } from '../collection-item/collection-item.component';
import './checkout-item.styles.scss';

interface ICartItemProps {
  cartItem: ITypeData;
}

const CheckoutItem = ({
  cartItem: { name, imageUrl, price, quantity }
}: ICartItemProps): JSX.Element => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;
