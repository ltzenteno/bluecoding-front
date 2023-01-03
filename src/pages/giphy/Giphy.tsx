import React from 'react';
import List from '../../components/List';

const GiphyList: React.FC = () => {
  return (
    <div>
      <div className="flex gap-5">
        <input
          className="appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
        <button
          onClick={() => []}
          className="button bg-blue-500 text-white py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
      <div>
        <List />
      </div>
    </div>
  );
};

export default GiphyList;
