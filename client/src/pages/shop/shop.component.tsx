import React from 'react';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils.js';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from '../../redux/shop/shop.selectors.js';

//const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner = WithSpinner(CollectionPage);

interface ISHopPageProps extends RouteComponentProps {
  fetchCollectionsStartAsync: Function;
}
class ShopPage extends React.Component<ISHopPageProps, {}> {
  // state = {
  //   loading: true
  // };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    //  const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionLoaded: selectIsCollectionsLoaded
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   updateCollections: (collectionsMap: {}) =>
//     dispatch(updateCollections(collectionsMap))
// });

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//   fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
// });

export default connect(null, { fetchCollectionsStartAsync })(ShopPage);
//export default ShopPage;
