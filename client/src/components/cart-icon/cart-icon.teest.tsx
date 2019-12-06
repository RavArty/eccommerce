//After exporting unconnected component
//jest doensn't like svg component inside - doesn't see parent component

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
      toggleCartHidden: mockToggleCartHidden
    };
    wrapper = shallow(<CartIcon {...mockProps} />);
    // wrapper = shallow(<CartIcon {...mockProps} store={mockStore} />).dive();
  });
  it('should call toggleCartHidden when icon is clicked', () => {
    console.log(wrapper.debug());
    //  const cartIcon = findByTestAttr(wrapper, 'cart-icon');
    //  cartIcon.simulate('click');
    // expect(cartIcon.length).toBe(1);
    // wrapper.find('CartContainer').simulate('click');
    //   expect(mockToggleCartHidden).toHaveBeenCalled();
  });
});
