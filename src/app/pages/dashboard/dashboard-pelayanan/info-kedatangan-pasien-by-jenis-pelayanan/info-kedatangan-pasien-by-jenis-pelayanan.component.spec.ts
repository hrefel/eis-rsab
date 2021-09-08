import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoKedatanganPasienByJenisPelayananComponent } from './info-kedatangan-pasien-by-jenis-pelayanan.component';

describe('InfoKedatanganPasienByJenisPelayananComponent', () => {
  let component: InfoKedatanganPasienByJenisPelayananComponent;
  let fixture: ComponentFixture<InfoKedatanganPasienByJenisPelayananComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoKedatanganPasienByJenisPelayananComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoKedatanganPasienByJenisPelayananComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
