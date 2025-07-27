import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBind } from './two-bind';

describe('TwoBind', () => {
  let component: TwoBind;
  let fixture: ComponentFixture<TwoBind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwoBind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoBind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
