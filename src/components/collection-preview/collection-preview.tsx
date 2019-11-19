import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

interface ICollectionPreview {
  title: string;
  items: any;
}
const CollectionPreview = ({
  title,
  items
}: ICollectionPreview): JSX.Element => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item: any, idx: number) => idx < 4)
        .map(({ id, ...otherItemProps }: any) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
