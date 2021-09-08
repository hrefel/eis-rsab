import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KunjunganByJenisPasienComponent } from './kunjungan-by-jenis-pasien.component';

describe('KunjunganByJenisPasienComponent', () => {
  let component: KunjunganByJenisPasienComponent;
  let fixture: ComponentFixture<KunjunganByJenisPasienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KunjunganByJenisPasienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KunjunganByJenisPasienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
