import React from 'react';
import { GifResponse } from '../api';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleModal } from '../slices/customSlice';

export type ListItemPropType = {
  item: GifResponse;
};

const ListItem: React.FC<ListItemPropType> = ({ item }) => {
  const dispatch = useAppDispatch();

  const showModal = () => {
    console.log('> abre modal');
    dispatch(toggleModal(true));
  };

  return (
    <li className="w-full py-10">
      <div className="flex justify-between bg-white text-black rounded-md h-36">
        <img
          className="w-12 h-6"
          alt={item.id}
          src={item.images.downsized.url}
          onClick={showModal}
        />
        <span>{item.id}</span>
      </div>
    </li>
  );
};

export default ListItem;
