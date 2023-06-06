import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../app-state';
import { ProductListReducer } from '../coffee/product/product.reducer';

export const reducers: ActionReducerMap<AppState> = {
  data: ProductListReducer,
};
