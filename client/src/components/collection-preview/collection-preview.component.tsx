import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collection-item.component';

import { RouteComponentProps } from 'react-router-dom';
import './collection-preview.styles.scss';

interface ICollectionPreview {
  title: string;
  items: any;
}
const CollectionPreview = ({
  title,
  items
}: ICollectionPreview): JSX.Element => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item: any, idx: number) => idx < 4)
          .map((item: any) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
