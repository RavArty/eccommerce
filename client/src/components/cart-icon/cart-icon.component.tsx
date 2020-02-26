import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../redux/root-reducer';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

interface ICartIconProps {
  toggleCartHidden: typeof toggleCartHidden;
  itemCount?: number;
  hidden: boolean;
}
export const CartIcon = ({
  toggleCartHidden,
  itemCount,
  hidden
}: ICartIconProps): JSX.Element => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      {/* <ShoppingIcon /> */}
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = (state: AppState) => ({
  itemCount: selectCartItemsCount(state),
  hidden: selectCartHidden(state)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
