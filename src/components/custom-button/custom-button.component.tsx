import React from 'react';

import './custom-buttom.styles.scss';

type CustomButtonProps = {
  children?: string;
  type?: 'submit';
  onClick?: () => void;
  isGoogleSignIn?: true | false;
};
const CustomButton = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: CustomButtonProps) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
