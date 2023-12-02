import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToProductComponent } from './back-to-product.component';

describe('BackToProductComponent', () => {
  let component: BackToProductComponent;
  let fixture: ComponentFixture<BackToProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackToProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackToProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
