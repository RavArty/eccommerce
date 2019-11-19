import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser, DocumentData } from './redux/user/user.actions';

import './App.css';

interface Entity {
  id: string;
}
interface IAppProps {
  setCurrentUser: typeof setCurrentUser;
}

export interface IAppState {
  // currentUser: firebase.User | null | Entity;
}
class App extends React.Component<IAppProps, {}> {
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
      }
      //  setCurrentUser(userAuth);
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
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: DocumentData) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
