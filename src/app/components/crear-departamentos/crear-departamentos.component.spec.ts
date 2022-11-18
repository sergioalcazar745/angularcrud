import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearDepartamentosComponent } from './crear-departamentos.component';

describe('CrearDepartamentosComponent', () => {
  let component: CrearDepartamentosComponent;
  let fixture: ComponentFixture<CrearDepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearDepartamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearDepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
