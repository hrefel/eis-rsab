import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasienTerlayaniComponent } from './pasien-terlayani.component';

describe('PasienTerlayaniComponent', () => {
  let component: PasienTerlayaniComponent;
  let fixture: ComponentFixture<PasienTerlayaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasienTerlayaniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasienTerlayaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
