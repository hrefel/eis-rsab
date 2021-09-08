import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataKegiatanPelayananRsComponent } from './data-kegiatan-pelayanan-rs.component';

describe('DataKegiatanPelayananRsComponent', () => {
  let component: DataKegiatanPelayananRsComponent;
  let fixture: ComponentFixture<DataKegiatanPelayananRsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataKegiatanPelayananRsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataKegiatanPelayananRsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
