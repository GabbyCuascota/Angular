import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioBotonComponent } from './ejercicio-boton.component';

describe('EjercicioBotonComponent', () => {
  let component: EjercicioBotonComponent;
  let fixture: ComponentFixture<EjercicioBotonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjercicioBotonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioBotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
