import { CartActionTypes } from './cart.types';
import { ITypeData } from '../../components/collection-item/collection-item.component';

export interface ToggleCartAction {
  type: CartActionTypes.TOGGLE_CART_HIDDEN;
}

export interface AddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: ITypeData;
}

export interface ClearFromCartAction {
  type: CartActionTypes.CLEAR_ITEM_FROM_CART;
  payload: ITypeData;
}

export interface RemoveItemFromCartAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: ITypeData;
}

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = (item: ITypeData) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
});

export const clearItemFromCart = (item: ITypeData) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item
});

export const removeItem = (item: ITypeData) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item
});
