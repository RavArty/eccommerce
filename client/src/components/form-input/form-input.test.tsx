import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../_test/testUtils';
import FormInput from './form-input.component';

describe('FormInput component', () => {
  let wrapper: ShallowWrapper;
  let mockHandleChange: (event: React.FormEvent<HTMLInputElement>) => void;

  beforeEach(() => {
    mockHandleChange = jest.fn();

    const mockProps = {
      label: 'email',
      value: 'test@gmail.com',
      handleChange: mockHandleChange,
      required: false
    };

    wrapper = shallow(<FormInput {...mockProps} />);
  });

  it('should call handleChange method when input changes', () => {
    const input = findByTestAttr(wrapper, 'form-input');
    input.simulate('change');
    expect(mockHandleChange).toHaveBeenCalled();
  });

  it('should render Labe if there is a label', () => {
    expect(wrapper.exists('label')).toBe(true);
  });

  it('should not render Labe if there is no label', () => {
    const mockNewProps = {
      label: '',
      value: 'test@gmail.com',
      handleChange: mockHandleChange,
      required: false
    };

    const newWrapper = shallow(<FormInput {...mockNewProps} />);
    expect(newWrapper.exists('label')).toBe(false);
  });
});
