import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import { AppState } from '../../redux/root-reducer';
import { IMenuItems } from '../directory/directory.component';
//import './collections-overview.styles.scss';

interface ICollectionsOverviewProps {
  collections: IMenuItems[];
}

const CollectionsOverview = ({ collections }: any): JSX.Element => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }: any) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

// const mapStateToProps = () => ({
//   collections: selectCollectionsForPreview
// });

// const mapStateToProps = (state: AppState) => ({
//   collections: selectCollectionsForPreview
// });
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
