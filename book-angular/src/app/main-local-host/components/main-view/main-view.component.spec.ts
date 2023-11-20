import { ComponentFixture, TestBed } from '@angular/core/testing'

import { MainViewLocalComponent } from './main-view.component'

describe('MainViewLocalComponent', () => {
  let component: MainViewLocalComponent
  let fixture: ComponentFixture<MainViewLocalComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainViewLocalComponent],
    })
    fixture = TestBed.createComponent(MainViewLocalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
