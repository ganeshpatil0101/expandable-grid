import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridExpandableRowComponent } from './grid-expandable-row.component';

describe('GridExpandableRowComponent', () => {
  let component: GridExpandableRowComponent;
  let fixture: ComponentFixture<GridExpandableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridExpandableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridExpandableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
