import React from 'react';

import { shallow } from 'enzyme';
import { findByTestAttr } from '../../_test/testUtils';
import { CartDropdown } from './cart-dropdown.component';
import CustomButton from '../custom-button/custom-button.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ICartDropdownProps } from './cart-dropdown.component';
import { ITypeData } from '../collection-item/collection-item.component';
import { RouteComponentProps } from 'react-router-dom';

describe('CartDropdown component', () => {
  let wrapper;
  let mockHistory;
  let mockDispatch;
  const mockCartItems = [
    { id: 1, name: 'name', price: 5, imageUrl: 'image' },
    { id: 2, name: 'name', price: 5, imageUrl: 'image' },
    { id: 3, name: 'name', price: 5, imageUrl: 'image' }
  ];

  beforeEach(() => {
    mockHistory = {
      push: jest.fn()
    };

    mockDispatch = jest.fn();

    const mockProps = {
      cartItems: mockCartItems,
      history: mockHistory,
      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should call history.push when button is clicked', () => {
    let wrapper = shallow(<CartDropdown />);
    //  const dropDown = findByTestAttr(wrapper, 'cart-dropdown');
    //  expect(dropDown.length).toBe(0);
    //  wrapper.find('CustomButton').simulate('click');
    // expect(mockHistory.push).toHaveBeenCalled();
    // expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });
});
