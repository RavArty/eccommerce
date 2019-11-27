import React from 'react';

import './custom-buttom.styles.scss';

type CustomButtonProps = {
  children?: string;
  type?: 'submit';
  onClick?: () => void;
  isGoogleSignIn?: true | false;
  inverted?: true | false;
};
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}: CustomButtonProps) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : ''
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
