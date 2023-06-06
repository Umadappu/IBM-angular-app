import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProductComponent } from './product.component';
import { selectProductState } from './product.selectors';
import { AppState } from '../../app-state';
import { ProductList } from './product.actions';
import { ProductModel } from 'src/app/models/product.model';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let myStore: Partial<Store<AppState>>;

  const mockData: ProductModel[] = [
    {
      id: 2849,
      uid: 'a37650a1-1b61-4c2c-b5c8-960cf211ab82',
      blend_name: 'Spilt Java',
      origin: 'Acatenango, Guatemala',
      variety: 'Typica',
      notes: 'deep, chewy, golden raisin, meyer lemon, white pepper',
      intensifier: 'dry',
    },
    {
      id: 8668,
      uid: 'b7f61007-8034-4635-8a7a-8c154d23aa65',
      blend_name: 'Major Nuts',
      origin: 'Masaya, Nicaragua',
      variety: 'Bourbon',
      notes: 'structured, slick, green-tea, tobacco, green-tea',
      intensifier: 'astringent',
    },
  ];

  beforeEach(async () => {
    // myStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    myStore = {
      select: () =>
        of({
          data: [
            {
              id: 2849,
              uid: 'a37650a1-1b61-4c2c-b5c8-960cf211ab82',
              blend_name: 'Spilt Java',
              origin: 'Acatenango, Guatemala',
              variety: 'Typica',
              notes: 'deep, chewy, golden raisin, meyer lemon, white pepper',
              intensifier: 'dry',
            },
            {
              id: 8668,
              uid: 'b7f61007-8034-4635-8a7a-8c154d23aa65',
              blend_name: 'Major Nuts',
              origin: 'Masaya, Nicaragua',
              variety: 'Bourbon',
              notes: 'structured, slick, green-tea, tobacco, green-tea',
              intensifier: 'astringent',
            },
          ],
        }),
      dispatch: jasmine.createSpy('dispatch'),
    };

    await TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        MatPaginator,
        MatTableDataSource,
        MatTable,
      ],
      imports: [],
      providers: [{ provide: Store, useValue: myStore }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the product data from the store', () => {
    expect(component.productData).toEqual([
      {
        id: 2849,
        uid: 'a37650a1-1b61-4c2c-b5c8-960cf211ab82',
        blend_name: 'Spilt Java',
        origin: 'Acatenango, Guatemala',
        variety: 'Typica',
        notes: 'deep, chewy, golden raisin, meyer lemon, white pepper',
        intensifier: 'dry',
      },
      {
        id: 8668,
        uid: 'b7f61007-8034-4635-8a7a-8c154d23aa65',
        blend_name: 'Major Nuts',
        origin: 'Masaya, Nicaragua',
        variety: 'Bourbon',
        notes: 'structured, slick, green-tea, tobacco, green-tea',
        intensifier: 'astringent',
      },
    ]);
  });

  it('should create the MatTableDataSource with the product data', () => {
    expect(component.dataSource?.data).toEqual([
      {
        id: 2849,
        uid: 'a37650a1-1b61-4c2c-b5c8-960cf211ab82',
        blend_name: 'Spilt Java',
        origin: 'Acatenango, Guatemala',
        variety: 'Typica',
        notes: 'deep, chewy, golden raisin, meyer lemon, white pepper',
        intensifier: 'dry',
      },
      {
        id: 8668,
        uid: 'b7f61007-8034-4635-8a7a-8c154d23aa65',
        blend_name: 'Major Nuts',
        origin: 'Masaya, Nicaragua',
        variety: 'Bourbon',
        notes: 'structured, slick, green-tea, tobacco, green-tea',
        intensifier: 'astringent',
      },
    ]);
  });

  it('should set the MatPaginator for the MatTableDataSource', () => {
    expect(component.dataSource?.paginator).toBeDefined();
    expect(component.dataSource?.paginator instanceof MatPaginator).toBeTrue();
  });

  it('should dispatch the ProductList action', () => {
    // spyOn(myStore, 'dispatch').and.callThrough();
    component.ngOnInit();
    expect(myStore.dispatch).toHaveBeenCalledWith(ProductList());
  });
});
