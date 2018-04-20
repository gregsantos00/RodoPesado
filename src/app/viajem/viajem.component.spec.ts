import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajemComponent } from './viajem.component';

describe('ViajemComponent', () => {
  let component: ViajemComponent;
  let fixture: ComponentFixture<ViajemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
