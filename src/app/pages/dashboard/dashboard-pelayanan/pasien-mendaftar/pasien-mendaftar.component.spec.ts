import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasienMendaftarComponent } from './pasien-mendaftar.component';

describe('PasienMendaftarComponent', () => {
  let component: PasienMendaftarComponent;
  let fixture: ComponentFixture<PasienMendaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasienMendaftarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasienMendaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
