import { createSelector } from 'reselect';
import { AppState } from '../root-reducer';

//state - is a whole reducer state
const selectCart = (state: AppState) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + (cartItem.quantity ? cartItem.quantity : 0),
      0
    )
);
