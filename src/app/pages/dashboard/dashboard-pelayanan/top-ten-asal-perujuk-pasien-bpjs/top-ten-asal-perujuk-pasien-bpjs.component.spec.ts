import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenAsalPerujukPasienBpjsComponent } from './top-ten-asal-perujuk-pasien-bpjs.component';

describe('TopTenAsalPerujukPasienBpjsComponent', () => {
  let component: TopTenAsalPerujukPasienBpjsComponent;
  let fixture: ComponentFixture<TopTenAsalPerujukPasienBpjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenAsalPerujukPasienBpjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenAsalPerujukPasienBpjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
