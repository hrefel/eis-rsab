import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendPengunjungPasienRajalComponent } from './trend-pengunjung-pasien-rajal.component';

describe('TrendPengunjungPasienRajalComponent', () => {
  let component: TrendPengunjungPasienRajalComponent;
  let fixture: ComponentFixture<TrendPengunjungPasienRajalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendPengunjungPasienRajalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendPengunjungPasienRajalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
