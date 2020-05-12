import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosEnLineaComponent } from './atributos-en-linea.component';

describe('AtributosEnLineaComponent', () => {
  let component: AtributosEnLineaComponent;
  let fixture: ComponentFixture<AtributosEnLineaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtributosEnLineaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosEnLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
