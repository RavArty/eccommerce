import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CartIcon } from './cart-icon.component';
import { findByTestAttr } from '../../_test/testUtils';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('CartIcon component', () => {
  let wrapper: ShallowWrapper;
  let mockToggleCartHidden: typeof toggleCartHidden;

  beforeEach(() => {
    mockToggleCartHidden = jest.fn();

    const mockProps = {
      itemCount: 0,
      test: 0,
      toggleCartHidden: mockToggleCartHidden,
      hidden: false
    };
    wrapper = shallow(<CartIcon {...mockProps} />);
  });
  it('should call toggleCartHidden when icon is clicked', () => {
    //console.log(wrapper.debug());
    const cartIcon = findByTestAttr(wrapper, 'cart-icon');
    cartIcon.simulate('click');
    expect(mockToggleCartHidden).toHaveBeenCalled();
  });

  it('should render the itemCount as the text', () => {
    const cartIcon = parseInt(findByTestAttr(wrapper, 'cart-icon').text());
    //const itemCount = parseInt(wrapper.find('ItemCountContainer').text());
    expect(cartIcon).toBe(0);
  });
});
