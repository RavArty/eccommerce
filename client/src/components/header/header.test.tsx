import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../_test/testUtils';
import { Header } from './header.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { IHeaderProps } from './header.component';

describe('Header component', () => {
  let wrapper: ShallowWrapper;
  let mockSignOutStart: Function;

  beforeEach(() => {
    const mockProps: IHeaderProps = {
      hidden: true,
      currentUser: {
        uid: '123'
      }
    };

    wrapper = shallow(<Header {...mockProps} />);
  });
  describe('if currentUser is present', () => {
    it('should render sign out link', () => {
      const input = findByTestAttr(wrapper, 'option')
        .at(2)
        .text();
      expect(input).toBe('SIGN OUT');
    });
  });

  describe('if currentUser is null', () => {
    it('should render sign in link', () => {
      const mockProps = {
        hidden: true,
        currentUser: null
      };
      const newWrapper = shallow(<Header {...mockProps} />);
      const input = findByTestAttr(newWrapper, 'option')
        .at(2)
        .text();
      expect(input).toBe('SIGN IN');
    });
  });

  describe('if hidden is true', () => {
    it('should not render CartDropdown', () => {
      expect(wrapper.exists(CartDropdown)).toBe(false);
    });
  });

  describe('if currentUser is null', () => {
    it('should render CartDropdown', () => {
      const mockProps = {
        hidden: false,
        currentUser: null
      };

      const newWrapper = shallow(<Header {...mockProps} />);

      expect(newWrapper.exists(CartDropdown)).toBe(true);
    });
  });
});
