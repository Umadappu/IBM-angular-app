import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { ProductListEffects } from './coffee/product/product.effects';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductListEffects]),
  ],
})
export class AppStoreModule {}
