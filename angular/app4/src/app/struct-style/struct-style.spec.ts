import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructStyle } from './struct-style';

describe('StructStyle', () => {
  let component: StructStyle;
  let fixture: ComponentFixture<StructStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
