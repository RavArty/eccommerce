import React from 'react';

import './custom-buttom.styles.scss';

type CustomButtonProps = {
  children?: string;
  type: 'submit';
};
const CustomButton = ({ children, ...otherProps }: CustomButtonProps) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
