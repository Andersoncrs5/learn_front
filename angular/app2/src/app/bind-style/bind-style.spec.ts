import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindStyle } from './bind-style';

describe('BindStyle', () => {
  let component: BindStyle;
  let fixture: ComponentFixture<BindStyle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindStyle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindStyle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
