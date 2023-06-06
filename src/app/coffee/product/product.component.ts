import {
  Component,
  OnInit,
  ViewChild,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { selectProductState } from './product.selectors';
import { AppState } from 'src/app/app-state';
import { ProductList } from './product.actions';
import { ProductModel } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  // Array to hold the data for the table
  productData: ProductModel[] = [];

  // Datasource to bind the data to the table
  dataSource: MatTableDataSource<ProductModel> | null = null;

  // Array of columns in the table
  displayedColumns: string[] = [
    'id',
    'uid',
    'blend_name',
    'origin',
    'variety',
    'notes',
    'intensifier',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private store: Store<AppState>) {}

  // Retreiving Product's list on pageload from Store
  ngOnInit() {
    //Get the state from Product selector and subscribe to store state to get the data
    this.store.select(selectProductState).subscribe((data: any) => {
      // Extract the state and assign to productdata array
      this.productData = data?.data || [];

      // Create a new MatTableDataSource with the data
      this.dataSource = new MatTableDataSource(this.productData);

      // Add Pagination to the table
      this.dataSource.paginator = this.paginator;
    });

    // Dispatch the action to fetch the product data
    this.store.dispatch(ProductList());
  }
}
