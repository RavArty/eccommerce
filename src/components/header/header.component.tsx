import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { IAppState } from '../../App';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { DocumentData } from '../../redux/user/user.actions';
import './header.styles.scss';

//interface IHeaderProps extends IAppState {}
const Header = ({ currentUser }: DocumentData): JSX.Element => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = ({ user }: DocumentData) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(Header);
