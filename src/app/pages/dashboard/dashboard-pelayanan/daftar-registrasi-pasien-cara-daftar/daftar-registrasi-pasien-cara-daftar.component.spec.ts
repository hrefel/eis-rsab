import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarRegistrasiPasienCaraDaftarComponent } from './daftar-registrasi-pasien-cara-daftar.component';

describe('DaftarRegistrasiPasienCaraDaftarComponent', () => {
  let component: DaftarRegistrasiPasienCaraDaftarComponent;
  let fixture: ComponentFixture<DaftarRegistrasiPasienCaraDaftarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaftarRegistrasiPasienCaraDaftarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarRegistrasiPasienCaraDaftarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
