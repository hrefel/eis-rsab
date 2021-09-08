import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KetersediaanTempatTidurPerkelasComponent } from './ketersediaan-tempat-tidur-perkelas.component';

describe('KetersediaanTempatTidurPerkelasComponent', () => {
  let component: KetersediaanTempatTidurPerkelasComponent;
  let fixture: ComponentFixture<KetersediaanTempatTidurPerkelasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KetersediaanTempatTidurPerkelasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KetersediaanTempatTidurPerkelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
