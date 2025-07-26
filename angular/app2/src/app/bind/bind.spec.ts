import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bind } from './bind';

describe('Bind', () => {
  let component: Bind;
  let fixture: ComponentFixture<Bind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Bind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bind);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
