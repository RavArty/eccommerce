import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import { Dispatch } from 'redux';

import './collection-item.styles.scss';

export interface ITypeData {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity?: number;
}
interface ICollectionItemProps {
  item: ITypeData;
  addItem: typeof addItem;
}
const CollectionItem = ({
  item,
  addItem
}: ICollectionItemProps): JSX.Element => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        Add to cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: ITypeData) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
