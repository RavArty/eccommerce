import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

interface ISHopPageProps extends RouteComponentProps {
  fetchCollectionsStartAsync: Function;
}
class ShopPage extends React.Component<ISHopPageProps, {}> {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
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
