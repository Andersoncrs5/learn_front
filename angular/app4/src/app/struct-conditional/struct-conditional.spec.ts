import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructConditional } from './struct-conditional';

describe('StructConditional', () => {
  let component: StructConditional;
  let fixture: ComponentFixture<StructConditional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructConditional]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructConditional);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
