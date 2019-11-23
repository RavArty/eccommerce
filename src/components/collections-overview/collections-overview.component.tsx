import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.styles.scss';
import { AppState } from '../../redux/root-reducer';

interface ICollectionsOverviewProps {
  collections: [];
}
const CollectionsOverview = ({ collections }: any): JSX.Element => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }: any) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state: AppState) => ({
  collections: selectCollectionsForPreview
});
// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview
// });

export default connect(mapStateToProps)(CollectionsOverview);
