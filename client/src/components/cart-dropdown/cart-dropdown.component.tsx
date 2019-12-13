import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { Dispatch } from 'redux';
import { AppState } from '../../redux/root-reducer';
import { ITypeData } from '../collection-item/collection-item.component';
import { History } from 'history';

export interface ICartDropdownProps {
  cartItems: ITypeData[];
  dispatch: Dispatch;
  history: History;
}

export const CartDropdown = ({
  cartItems,
  history,
  dispatch
}: ICartDropdownProps) => {
  const node = useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleClick = (e: MouseEvent) => {
    if (node.current.contains(e.target as Node)) {
      // inside click
      return;
    }
    dispatch(toggleCartHidden());
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  return (
    <div className="cart-dropdown" ref={node}>
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state)
});

//if we're not supplying connect with 2nd argument, connect will pass
//dispatch to component as a property
export default withRouter(connect(mapStateToProps)(CartDropdown));
