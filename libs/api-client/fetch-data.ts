import { get } from 'libs/request';

import { PaginationParams } from '.';

export default async function getData<T>({
  dataSrc,
  page = 1,
  offset = 0,
  limit = 10,
  signal,
}: Partial<PaginationParams> = {}): Promise<T[]> {
  const searchParams = new URLSearchParams();

  if (offset > 0) searchParams.set('offset', offset as any);
  else searchParams.set('page', page as any);

  if (limit !== 10) searchParams.set('limit', limit as any);

  return get<T[]>(`${dataSrc}?${searchParams.toString()}`, signal);
}
