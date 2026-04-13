import { useEffect, useState } from 'react';
import { ChevronDown } from 'react-feather';

import { ProductCard } from '../cards/Product';
import { Button } from '../button';
import { useFilterContext } from '../../contexts/filters';
import { api } from 'api/api';
import { ProductResponse } from 'interfaces/product';

export const Products = () => {
  const { filters, query } = useFilterContext();
  const [productData, setProductData] = useState<ProductResponse | null>(null);
  const [page, setPage] = useState(1);

  const limit = 2;

  const fetchProducts = async (currentPage: number, isNewSearch: boolean) => {
    try {
      const { data } = await api.get<ProductResponse>('/products', {
        params: {
          page: currentPage,
          limit,
          query,
          ...filters,
        },
      });
      setProductData((prev) => {
        if (currentPage === 1) return data;

        return {
          ...data,
          items: prev ? [...prev.items, ...data.items] : data.items,
        };
      });
    } catch (error) {
      console.error('Could not load products:', error);
    }
  };
  
  useEffect(() => {
    setPage(1);
    fetchProducts(1, true);
  }, [filters, query]);

  useEffect(() => {
    if (page > 1) {
      fetchProducts(page, false);
    }
  }, [page]);

  const hasMore = productData && productData.currentPage < productData.totalPages;
  const isEmpty = productData?.totalItems === 0;

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  if (isEmpty) {
    return (
      <div>
        <p className="text-center text-gray-500 text-xl mt-4">
          Brak produktów spełniających kryteria wyszukiwania
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-3 gap-x-4 gap-y-5">
        {productData?.items.map((product) => (
          <ProductCard key={product.code} {...product} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {hasMore && (
          <Button
            variant={'tertiary'}
            value={'Pokaż więcej'}
            icon={<ChevronDown />}
            onClick={handleLoadMore}
          />
        )}
      </div>
    </>
  );
};
