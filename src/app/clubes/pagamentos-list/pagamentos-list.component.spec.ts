import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentosListComponent } from './pagamentos-list.component';

describe('PagamentosListComponent', () => {
  let component: PagamentosListComponent;
  let fixture: ComponentFixture<PagamentosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagamentosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
