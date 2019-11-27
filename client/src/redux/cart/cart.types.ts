import {
  ToggleCartAction,
  AddItemAction,
  ClearFromCartAction,
  RemoveItemFromCartAction
} from './cart.actions';

export enum CartActionTypes {
  TOGGLE_CART_HIDDEN = 'TOGGLE_CART_HIDDEN',
  ADD_ITEM = 'ADD_ITEM',
  CLEAR_ITEM_FROM_CART = 'CLEAR_ITEM_FROM_CART',
  REMOVE_ITEM = 'REMOVE_ITEM'
}

export type CartActions =
  | ToggleCartAction
  | AddItemAction
  | ClearFromCartAction
  | RemoveItemFromCartAction;
