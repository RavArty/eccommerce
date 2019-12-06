import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../_test/testUtils';
import { CheckoutItem, ICartItemProps } from './checkout-item.component';
import { Dispatch } from 'redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

describe('CheckoutItem component', () => {
  let wrapper: ShallowWrapper;
  let mockClearItem: typeof clearItemFromCart;
  let mockAddItem: typeof addItem;
  let mockRemoveItem: typeof removeItem;

  beforeEach(() => {
    mockClearItem = jest.fn();
    mockAddItem = jest.fn();
    mockRemoveItem = jest.fn();

    const mockProps: ICartItemProps = {
      cartItem: {
        id: 1,
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2
      },
      clearItem: mockClearItem,
      addItem: mockAddItem,
      removeItem: mockRemoveItem
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it('should call clearItem when remove button is clicked', () => {
    const removeButton = findByTestAttr(wrapper, 'remove-button');
    removeButton.simulate('click');
    expect(mockClearItem).toHaveBeenCalled();
  });

  it('should call addItem when left arrow is clicked', () => {
    const arrow = findByTestAttr(wrapper, 'arrow').at(0);
    // console.log(arrow.debug());
    arrow.simulate('click');
    expect(mockRemoveItem).toHaveBeenCalled();
  });

  it('should call addItem when right arrow is clicked', () => {
    const arrow = findByTestAttr(wrapper, 'arrow').at(1);
    arrow.simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });
});
