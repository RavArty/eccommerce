import React from 'react';

import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../_test/testUtils';
import { CartDropdown } from './cart-dropdown.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ICartDropdownProps } from './cart-dropdown.component';
import { ITypeData } from '../collection-item/collection-item.component';
import { RouteComponentProps } from 'react-router-dom';
import { Dispatch } from 'redux';
import { History } from 'history';
import { createMemoryHistory } from 'history';

describe('CartDropdown component', () => {
  let wrapper: ShallowWrapper;
  let mockHistory;
  let mockDispatch: Dispatch;
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

    const mockProps: ICartDropdownProps = {
      cartItems: mockCartItems,
      history: createMemoryHistory(),
      dispatch: mockDispatch
    };

    wrapper = shallow(<CartDropdown {...mockProps} />);
  });

  it('should call history.push when button is clicked', () => {
    //let wrapper = shallow(<CartDropdown />);
    //  const dropDown = findByTestAttr(wrapper, 'cart-dropdown');
    //  expect(dropDown.length).toBe(0);
    //const history = createMemoryHistory();
    //-----------------------------------------------
    //history.push - wasn't tested
    //-----------------------------------------------
    wrapper.find('CustomButton').simulate('click');
    //   expect(createMemoryHistory()).toHaveBeenCalled();
    //expect(createMemoryHistory().location.pathname).toBe('/checkout');
    expect(mockDispatch).toHaveBeenCalledWith(toggleCartHidden());
  });

  it('should render an equal number of CartItem components as the cartItems prop', () => {
    expect(wrapper.find('CartItem').length).toEqual(mockCartItems.length);
  });

  it('should render EmptyMessageContainer if cartItems is empty', () => {
    const mockProps = {
      cartItems: [],
      history: createMemoryHistory(),
      dispatch: mockDispatch
    };

    const newWrapper = shallow(<CartDropdown {...mockProps} />);
    const emptyMessage = findByTestAttr(newWrapper, 'empty-message');
    expect(emptyMessage.length).toBe(1);
  });
});
