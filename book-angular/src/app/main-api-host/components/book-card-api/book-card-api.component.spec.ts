import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BookCardApiComponent } from './book-card-api.component'

describe('BookCardApiComponent', () => {
  let component: BookCardApiComponent
  let fixture: ComponentFixture<BookCardApiComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookCardApiComponent],
    })
    fixture = TestBed.createComponent(BookCardApiComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
