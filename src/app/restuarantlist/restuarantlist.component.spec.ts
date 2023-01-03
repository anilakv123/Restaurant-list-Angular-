import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarantlistComponent } from './restuarantlist.component';

describe('RestuarantlistComponent', () => {
  let component: RestuarantlistComponent;
  let fixture: ComponentFixture<RestuarantlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestuarantlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestuarantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
