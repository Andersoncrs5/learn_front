import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildCom } from './view-child-com';

describe('ViewChildCom', () => {
  let component: ViewChildCom;
  let fixture: ComponentFixture<ViewChildCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewChildCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
