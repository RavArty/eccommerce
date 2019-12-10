import React from 'react';
import { connect } from 'react-redux';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-item/menu-item.component';

import { AppState } from '../../redux/root-reducer';

export interface IMenuItems {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string | undefined;
}
interface IDirectoryProps {
  sections: IMenuItems[];
}
const Directory = ({ sections }: IDirectoryProps): JSX.Element => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }: IMenuItems) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = (state: AppState) => ({
  sections: selectDirectorySections(state)
});

export default connect(mapStateToProps)(Directory);
