import React from 'react';
import { connect } from 'react-redux';
import { ITypeData } from '../collection-item/collection-item.component';
import { Dispatch } from 'redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

interface ICartItemProps {
  cartItem: ITypeData;
  clearItem: typeof clearItemFromCart;
  addItem: typeof addItem;
  removeItem: typeof removeItem;
}

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem
}: ICartItemProps): JSX.Element => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  clearItem: (item: ITypeData) => dispatch(clearItemFromCart(item)),
  addItem: (item: ITypeData) => dispatch(addItem(item)),
  removeItem: (item: ITypeData) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
