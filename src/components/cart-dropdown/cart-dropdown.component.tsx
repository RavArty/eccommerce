import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { AppState } from '../../redux/root-reducer';
import { ITypeData } from '../collection-item/collection-item.component';
import './cart-dropdown.styles.scss';

interface ICartDropdownProps {
  cartItems: ITypeData[];
}

const CartDropdown = ({ cartItems }: ICartDropdownProps) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
