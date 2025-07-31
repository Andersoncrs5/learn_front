import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diretive } from './diretive';

describe('Diretive', () => {
  let component: Diretive;
  let fixture: ComponentFixture<Diretive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Diretive]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diretive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
