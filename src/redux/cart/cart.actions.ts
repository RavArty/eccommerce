import { CartActionTypes } from './cart.types';

export interface ToggleCartAction {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});
