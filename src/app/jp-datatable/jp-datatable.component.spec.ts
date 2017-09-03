import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpDatatableComponent } from './jp-datatable.component';

describe('JpDatatableComponent', () => {
  let component: JpDatatableComponent;
  let fixture: ComponentFixture<JpDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
