import React from 'react';
import ListItem from './ListItem';
import { useAppSelector } from '../store/hooks';

const List: React.FC = () => {
  const items = useAppSelector((state) => state.custom.gifList);

  return (
    <div>
      <ul className="w-1/2">
        {items.map((it) => (
          <ListItem key={it.id} item={it} />
        ))}
      </ul>
    </div>
  );
};

export default List;
