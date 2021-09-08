import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PemakaianTempatTidurComponent } from './pemakaian-tempat-tidur.component';

describe('PemakaianTempatTidurComponent', () => {
  let component: PemakaianTempatTidurComponent;
  let fixture: ComponentFixture<PemakaianTempatTidurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PemakaianTempatTidurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PemakaianTempatTidurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
