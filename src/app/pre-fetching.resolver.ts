import { ResolveFn } from '@angular/router';
import { FetchDataService } from './fetchData.service';
import { inject } from '@angular/core';

export const preFetchingResolver: ResolveFn<Object> = (
  route,
  state,
  fetchingDataService: FetchDataService = inject(FetchDataService)
) => {
  return fetchingDataService.getResolvedData();
};
