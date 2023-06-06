import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/models/product.model';

/** */
export const ProductList = createAction('[List] Load List');
/**Action for loading Product list on success */
export const loadListSuccess = createAction(
  '[List] Load List Success',
  props<{ data: ProductModel[] }>()
);
/**Action for loading Product list on Failure */
export const loadListFailure = createAction(
  '[List] Load List Failure',
  props<{ error: string }>()
);
