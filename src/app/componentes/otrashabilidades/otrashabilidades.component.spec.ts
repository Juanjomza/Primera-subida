import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrashabilidadesComponent } from './otrashabilidades.component';

describe('OtrashabilidadesComponent', () => {
  let component: OtrashabilidadesComponent;
  let fixture: ComponentFixture<OtrashabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtrashabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtrashabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
