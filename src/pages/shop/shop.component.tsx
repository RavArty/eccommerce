import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.js';

import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

interface ISHopPageProps extends RouteComponentProps {
  updateCollections: any;
}
class ShopPage extends React.Component<ISHopPageProps, {}> {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      //   this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCollections: (collectionsMap: {}) =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
