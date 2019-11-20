import { CartActionTypes, CartActions } from './cart.types';
import { ITypeData } from '../../components/collection-item/collection-item.component';

interface ICartCheck {
  hidden: boolean;
  cartItems: ITypeData[];
}
const INITIAL_STATE: ICartCheck = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action: CartActions) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }
};

export default cartReducer;
