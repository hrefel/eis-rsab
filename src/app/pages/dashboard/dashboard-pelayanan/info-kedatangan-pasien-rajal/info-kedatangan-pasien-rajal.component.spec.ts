import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoKedatanganPasienRajalComponent } from './info-kedatangan-pasien-rajal.component';

describe('InfoKedatanganPasienRajalComponent', () => {
  let component: InfoKedatanganPasienRajalComponent;
  let fixture: ComponentFixture<InfoKedatanganPasienRajalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoKedatanganPasienRajalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoKedatanganPasienRajalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
