export interface IPagination {
  page?: number;
  limit?: number;
}

export type PaginatedResponse<T> = {
  items: T[];
  totalPages: number;
  currentPage: number;
  totalItems: number;
};

export interface AppError extends Error {
  status?: number;
}
