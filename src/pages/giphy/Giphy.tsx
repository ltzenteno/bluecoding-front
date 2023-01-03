import React, { useEffect, useState } from 'react';
import List from '../../components/List';
import {
  searchGifs,
  SearchRequestType,
  GiphyImage,
  GifResponse,
} from '../../api';
import SlideModal from '../../components/SlideModal';
import { setItems } from '../../slices/customSlice';
import { useAppDispatch } from '../../store/hooks';

const GiphyList: React.FC = () => {
  const dispatch = useAppDispatch();
  const [term, setTerm] = useState<string>('');
  const search = () => {
    const request: SearchRequestType = {
      searchTerm: term,
    };

    searchGifs(request).then((response) => {
      dispatch(setItems(response));
    });
  };

  return (
    <div>
      <div className="flex gap-5">
        <input
          className="appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          value={term}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTerm(e.target.value)
          }
        />
        <button
          onClick={search}
          disabled={term.trim() === ''}
          className="button bg-blue-500 text-white py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      <div>
        <List />
      </div>
      <SlideModal />
    </div>
  );
};

export default GiphyList;
