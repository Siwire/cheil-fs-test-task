import { useDebounce } from 'hooks/debounce';
import { useFilterContext } from '../../contexts/filters';
import { ChangeEvent, useEffect, useState } from 'react';

export const Search = () => {
  const { query, setQuery } = useFilterContext();
  const [inputValue, setInputValue] = useState(query);

  const debouncedSearchValue = useDebounce(inputValue, 500);

  useEffect(() => {
    setQuery(debouncedSearchValue);
  }, [debouncedSearchValue, setQuery]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setInputValue(value);
  };

  return (
    <input
      placeholder={'Search'}
      value={inputValue}
      onChange={handleChange}
      className={'text-sm font-normal px-3 py-2 bg-white w-full'}
    />
  );
};
