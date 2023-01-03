import React from 'react';
import { GifResponse } from '../api';
import ListItem from './ListItem';

export type ListPropType = {
  items: GifResponse[];
};

const List: React.FC<ListPropType> = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((it) => (
          <ListItem key={it.id} item={it} />
        ))}
      </ul>
    </div>
  );
};

export default List;
