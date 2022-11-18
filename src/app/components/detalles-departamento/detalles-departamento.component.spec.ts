import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesDepartamentoComponent } from './detalles-departamento.component';

describe('DetallesDepartamentoComponent', () => {
  let component: DetallesDepartamentoComponent;
  let fixture: ComponentFixture<DetallesDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesDepartamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
