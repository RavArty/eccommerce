import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { addItem } from '../../redux/cart/cart.actions';
import { findByTestAttr } from '../../_test/testUtils';
import { CollectionItem } from './collection-item.component';

describe('CollectionItem component', () => {
  let wrapper: ShallowWrapper;
  let mockAddItem: typeof addItem;
  const mockId = 1;
  const mockName = 'name';
  const mockPrice = 5;
  const mockImage = 'image';

  beforeEach(() => {
    mockAddItem = jest.fn();

    const mockProps = {
      item: {
        id: mockId,
        name: mockName,
        price: mockPrice,
        imageUrl: mockImage
      },
      addItem: mockAddItem
    };

    wrapper = shallow(<CollectionItem {...mockProps} />);
  });

  it('should call addItem when AddButton clicked', () => {
    wrapper.find('CustomButton').simulate('click');
    expect(mockAddItem).toHaveBeenCalled();
  });

  it('should render name prop in name container', () => {
    const name = findByTestAttr(wrapper, 'name');
    expect(name.text()).toBe(mockName);
  });

  it('should render price prop in price container', () => {
    const price = parseInt(findByTestAttr(wrapper, 'price').text());
    expect(price).toBe(mockPrice);
  });
});
