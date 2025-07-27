import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructLoop } from './struct-loop';

describe('StructLoop', () => {
  let component: StructLoop;
  let fixture: ComponentFixture<StructLoop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructLoop]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructLoop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
