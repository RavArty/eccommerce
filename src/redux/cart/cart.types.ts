import { ToggleCartAction, AddItemAction } from './cart.actions';

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM'
}

export type CartActions = ToggleCartAction | AddItemAction;
