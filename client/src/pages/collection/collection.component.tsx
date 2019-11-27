import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';
import { AppState } from '../../redux/root-reducer';

const CollectionPage = ({ collection }: any) => {
  console.log('CollectionPage: ', collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item: any) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
//ownProps - props of the component, that we wrapping in the connect
const mapStateToProps = (state: AppState, ownProps: any) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
