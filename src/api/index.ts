import axios from 'axios';
import qs from 'qs';

const API_URL = 'https://api.giphy.com/v1/gifs/search';

export type SearchRequestType = {
  searchTerm: string;
  offset?: number;
  limit?: number;
};

export type GiphyImage = {
  height: string;
  width: string;
  size: string;
  url: string;
};

export type GifResponse = {
  id: string;
  images: {
    original: GiphyImage;
    downsized: GiphyImage;
  };
};

export const searchGifs = async ({
  searchTerm,
  offset = 1,
  limit = 10,
}: SearchRequestType): Promise<GifResponse[]> => {
  const params = {
    api_key: process.env.REACT_APP_GIPHY_API_KEY || '',
    q: searchTerm,
    limit,
    offset,
  };

  const response = await axios.get(`${API_URL}/${qs.stringify(params)}`);

  return response.data as GifResponse[];
};
