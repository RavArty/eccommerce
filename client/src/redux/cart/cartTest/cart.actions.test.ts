import { CartActionTypes } from '../cart.types';
import { ITypeData } from '../../../components/collection-item/collection-item.component';

import {
  toggleCartHidden,
  addItem,
  removeItem,
  clearItemFromCart
} from '../cart.actions';

describe('toggleCartHidden action', () => {
  it('should create the toggleHidden action', () => {
    expect(toggleCartHidden().type).toEqual(CartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe('addItem action', () => {
  const mockItem: ITypeData = {
    id: 1,
    name: 'name',
    price: 5,
    imageUrl: 'image'
  };
  it('should create the addItem action', () => {
    const action = addItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearItemFromCart action', () => {
  const mockItem: ITypeData = {
    id: 1,
    name: 'name',
    price: 5,
    imageUrl: 'image'
  };
  it('should create the clearItemFromCart action', () => {
    const action = clearItemFromCart(mockItem);

    expect(action.type).toEqual(CartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeItem action', () => {
  const mockItem: ITypeData = {
    id: 1,
    name: 'name',
    price: 5,
    imageUrl: 'image'
  };

  it('should create the removeItem action', () => {
    const action = removeItem(mockItem);

    expect(action.type).toEqual(CartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});
