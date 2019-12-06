import { CartActionTypes, CartActions } from '../cart.types';
import cartReducer from '../cart.reducer';
import { ICartCheck } from '../cart.reducer';
import { ITypeData } from '../../../components/collection-item/collection-item.component';

const initialState: ICartCheck = {
  hidden: true,
  cartItems: []
};

const mockItem: ITypeData = {
  id: 1,
  name: 'name',
  price: 5,
  imageUrl: 'image',
  quantity: 3
};

const mockPrevState: ICartCheck = {
  hidden: true,
  cartItems: [
    mockItem,
    { id: 2, name: 'name', price: 5, imageUrl: 'image', quantity: 1 }
  ]
};

describe('cartReducer', () => {
  it('should return initial state', () => {
    expect(cartReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should toggle hidden with toggleHidden action', () => {
    expect(
      cartReducer(initialState, { type: CartActionTypes.TOGGLE_CART_HIDDEN })
        .hidden
    ).toBe(false);
  });

  it('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.ADD_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(4);
  });

  it('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.REMOVE_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toBe(2);
  });

  it('should remove item from cart if clearItemFromCart action fired with payload of existing item', () => {
    expect(
      cartReducer(mockPrevState, {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem
      }).cartItems[0].id
      //should be:
      //}).cartItems.includes(item => item.id === 1)
      //typescript error
    ).toBe(2);
  });
});
