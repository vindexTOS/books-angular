import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookApiComponent } from './single-book-api.component';

describe('SingleBookApiComponent', () => {
  let component: SingleBookApiComponent;
  let fixture: ComponentFixture<SingleBookApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleBookApiComponent]
    });
    fixture = TestBed.createComponent(SingleBookApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
