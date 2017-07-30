import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDataSourceComponent } from './grid-data-source.component';

describe('GridDataSourceComponent', () => {
  let component: GridDataSourceComponent;
  let fixture: ComponentFixture<GridDataSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridDataSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridDataSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
