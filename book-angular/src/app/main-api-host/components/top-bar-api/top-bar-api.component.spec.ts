import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarApiComponent } from './top-bar-api.component';

describe('TopBarApiComponent', () => {
  let component: TopBarApiComponent;
  let fixture: ComponentFixture<TopBarApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopBarApiComponent]
    });
    fixture = TestBed.createComponent(TopBarApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
