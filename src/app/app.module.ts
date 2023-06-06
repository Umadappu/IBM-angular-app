import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { ProductService } from './coffee/product/product.service';
import { AppComponent } from './app.component';
import { ProductComponent } from './coffee/product/product.component';
import { DetailsComponent } from './coffee/details/details.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    AppRoutingModule,
    AppStoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
