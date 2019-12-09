import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser, UserState } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

import { AppState } from './redux/root-reducer';

//import './App.css';

// interface Entity {
//   id: string;
// }
interface IAppProps {
  currentUser: UserState;
  setCurrentUser: typeof setCurrentUser;
}
interface IAppSelectorProps {
  currentUser: UserState;
}
interface IAppSelectorState {
  selectCurrentUser: typeof selectCurrentUser;
}

export interface IAppState {}

class App extends React.Component<IAppProps, IAppState> {
  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef:
          | firebase.firestore.DocumentReference
          | undefined = await createUserProfileDocument(userAuth);

        if (!userRef) return;

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    if (!this.unsubscribeFromAuth) return;
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector<IAppSelectorProps, IAppSelectorState >({
//   currentUser: selectCurrentUser
// });

const mapStateToProps = (state: AppState) => ({
  currentUser: selectCurrentUser(state)
});
//version without createStructuredSelector
// const mapStateToProps = ({ user }: AppState) => ({
//   currentUser: user.currentUser
// });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: UserState) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
