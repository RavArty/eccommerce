import React from 'react';
import { Route } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
//import CollectionPreview from '../../components/collection-preview/collection-preview';

//import {select} from '../../redux/shop/shop.selectors'
interface IShopPageProps {}
interface IShopPageState {}

const ShopPage = ({ match }: RouteComponentProps) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
