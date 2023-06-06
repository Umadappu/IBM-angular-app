import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './coffee/product/product.component';
import { DetailsComponent } from './coffee/details/details.component';
const routes: Routes = [
  { path: 'product', component: ProductComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
