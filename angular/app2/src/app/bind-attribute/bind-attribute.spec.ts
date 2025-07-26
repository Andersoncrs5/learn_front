import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindAttribute } from './bind-attribute';

describe('BindAttribute', () => {
  let component: BindAttribute;
  let fixture: ComponentFixture<BindAttribute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BindAttribute]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindAttribute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
