import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabsocialesComponent } from './habsociales.component';

describe('HabsocialesComponent', () => {
  let component: HabsocialesComponent;
  let fixture: ComponentFixture<HabsocialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabsocialesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HabsocialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
