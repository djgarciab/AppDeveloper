import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasambientalComponent } from './graficasambiental.component';

describe('GraficasambientalComponent', () => {
  let component: GraficasambientalComponent;
  let fixture: ComponentFixture<GraficasambientalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasambientalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasambientalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
