import { createReducer, on } from '@ngrx/store';
import {
  ProductList,
  loadListSuccess,
  loadListFailure,
} from './product.actions';
import { ProductModel } from 'src/app/models/product.model';

export interface ProductState {
  data: ProductModel[] | null;
  loading: boolean;
  error: string;
}

//define product state
export const initialState: ProductState = {
  data: null,
  loading: false,
  error: '',
};

export const ProductListReducer = createReducer(
  initialState,
  on(ProductList, (state) => ({ ...state })),
  on(loadListSuccess, (state, { data }) => {
    return {
      ...state,
      data: data,
    };
  }),
  on(loadListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
