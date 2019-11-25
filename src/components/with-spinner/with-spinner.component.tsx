import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

interface IWithSpinnerProps {
  isLoading?: boolean;
  props?: any;
}
// const WithSpinner = (WrappedComponent:React.ComponentType) => {
//   const Spinner = ({ isLoading, ...otherProps }) => {
//     return isLoading ? (
//       <SpinnerOverlay>
//         <SpinnerContainer />
//       </SpinnerOverlay>
//     ) : (
//       <WrappedComponent {...otherProps} />
//     );
//   };
//   return Spinner;
// };

const WithSpinner = (
  WrappedComponent: React.ComponentType<IWithSpinnerProps>
) => ({ isLoading, ...props }: IWithSpinnerProps) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...props} />
  );
};

export default WithSpinner;
