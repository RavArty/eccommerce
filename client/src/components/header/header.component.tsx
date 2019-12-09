import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import { UserState } from '../../redux/user/user.actions';
import { AppState } from '../../redux/root-reducer';
//import './header.styles.scss';

export interface IHeaderProps {
  currentUser: UserState;
  hidden: boolean;
}
// interface ISelectorState {
//   selectCartHidden: typeof selectCartHidden;
//   selectCurrentUser: typeof selectCurrentUser;
// }

//interface IHeaderProps extends IAppState {}
export const Header = ({ currentUser, hidden }: IHeaderProps): JSX.Element => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {/* <Link className="option" to="/shop">
        CONTACT
      </Link> */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
//we're not checking type here
// const mapStateToProps = createStructuredSelector<{}, {}>({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden
// });

const mapStateToProps = (state: AppState) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);
