import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

export interface IMenuItemProps extends RouteComponentProps<any> {
  title: string;
  imageUrl: string;
  linkUrl: string;
  size?: string | undefined;
}
export const MenuItem = ({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}: IMenuItemProps): JSX.Element => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      {/* <span className="subtitle">SHOP NOW</span> */}
    </div>
  </div>
);

export default withRouter(MenuItem);
