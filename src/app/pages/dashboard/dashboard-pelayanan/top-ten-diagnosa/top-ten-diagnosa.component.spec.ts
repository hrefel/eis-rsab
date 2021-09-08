import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenDiagnosaComponent } from './top-ten-diagnosa.component';

describe('TopTenDiagnosaComponent', () => {
  let component: TopTenDiagnosaComponent;
  let fixture: ComponentFixture<TopTenDiagnosaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTenDiagnosaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenDiagnosaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
