import React from 'react';
import { GifResponse } from '../api';

export type ListItemPropType = {
  item: GifResponse;
};

const ListItem: React.FC<ListItemPropType> = ({ item }) => {
  return <li>{item.id}</li>;
};

export default ListItem;
