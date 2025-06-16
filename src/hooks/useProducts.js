import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useProducts = (page = 1, limit = 12) => {
  return useQuery({
    queryKey: ['products', page],
    queryFn: async () => {
      const { data } = await axios.get(`https://your-api.com/products?_page=${page}&_limit=${limit}`);
      return data;
    },
    keepPreviousData: true,
  });
};
