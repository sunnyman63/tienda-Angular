import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCategoriaComponent } from './productos-categoria.component';

describe('ProductosCategoriaComponent', () => {
  let component: ProductosCategoriaComponent;
  let fixture: ComponentFixture<ProductosCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
