import { createSelector } from 'reselect';
import { AppState } from '../root-reducer';

const selectShop = (state: AppState) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections: any) => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = (collectionUrlParam: any) =>
  createSelector(
    [selectCollections],
    (collections: any) => collections[collectionUrlParam]
  );
