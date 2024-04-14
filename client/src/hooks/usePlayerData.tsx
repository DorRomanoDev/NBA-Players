import { useState, useEffect, useCallback } from 'react';
import { Player } from '../interfaces/Player';
import playerService from '../services/player';

const useDebouncedValue = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const usePlayerData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({ perPage: 25, cursor: 0 });
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 300);

  const fetchData = async (perPage: number, cursor: number, searchTerm: string) => {
    try {
      setIsLoadingPlayers(true);
      const response = await playerService.getPlayers(perPage, cursor, searchTerm)
      setPlayers(response.data.data);
      setIsLoadingPlayers(false);
      setError(null);
    } catch (error) {
      console.error('Error fetching players:', error);
      setIsLoadingPlayers(false);
      setError('Error fetching data. Please try again later.');
    }
  }

  useEffect(() => {
    fetchData(pagination.perPage, pagination.cursor, debouncedSearchTerm);
  }, [debouncedSearchTerm, pagination.cursor]);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setPagination({ ...pagination, cursor: (page - 1) * pagination.perPage });
  }, [pagination]);

  return { players, isLoadingPlayers, error, searchTerm, handlePageChange, pagination, handleSearch };
};

export default usePlayerData;
