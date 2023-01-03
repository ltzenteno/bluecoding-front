import React from 'react';
import { GifResponse } from '../api';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleModal, setSelectedGif } from '../slices/customSlice';

export type ListItemPropType = {
  item: GifResponse;
};

const ListItem: React.FC<ListItemPropType> = ({ item }) => {
  const dispatch = useAppDispatch();

  const showModal = () => {
    console.log('> abre modal');
    dispatch(setSelectedGif(item.id));
    dispatch(toggleModal(true));
  };

  return (
    <li className="w-full py-10">
      <div className="flex justify-start bg-white text-black rounded-md h-36 px-6 py-10">
        <img
          className="w-24 h-16 cursor-pointer"
          alt={item.id}
          src={item.images.downsized.url}
          onClick={showModal}
        />
        <span className="px-10">{item.id}</span>
      </div>
    </li>
  );
};

export default ListItem;
