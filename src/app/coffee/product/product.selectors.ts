import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.reducer';

// Selector to get the product state
export const selectProductState = createFeatureSelector<ProductState>('data');

// Selector to get the product data
export const selectProductListData = createSelector(
  selectProductState,
  (state: ProductState) => state.data
);

export const selectProductListLoading = createSelector(
  selectProductState,
  (state: ProductState) => state.loading
);

export const selectListError = createSelector(
  selectProductState,
  (state: ProductState) => state.error
);
