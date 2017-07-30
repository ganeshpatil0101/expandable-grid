import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHeadersComponent } from './grid-headers.component';

describe('GridHeadersComponent', () => {
  let component: GridHeadersComponent;
  let fixture: ComponentFixture<GridHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
