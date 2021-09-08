import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SebaranPasienRanapComponent } from './sebaran-pasien-ranap.component';

describe('SebaranPasienRanapComponent', () => {
  let component: SebaranPasienRanapComponent;
  let fixture: ComponentFixture<SebaranPasienRanapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SebaranPasienRanapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SebaranPasienRanapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
