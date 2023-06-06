import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductService } from './product.service';
import {
  loadListSuccess,
  ProductList,
  loadListFailure,
} from './product.actions';

@Injectable()
export class ProductListEffects {
  loadListData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductList),
      mergeMap(() =>
        this.productservice.getListData().pipe(
          map((data) => loadListSuccess({ data })),
          catchError((error) => of(loadListFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productservice: ProductService
  ) {}
}
