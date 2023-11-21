import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookApiComponent } from './add-book-api.component';

describe('AddBookApiComponent', () => {
  let component: AddBookApiComponent;
  let fixture: ComponentFixture<AddBookApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookApiComponent]
    });
    fixture = TestBed.createComponent(AddBookApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
