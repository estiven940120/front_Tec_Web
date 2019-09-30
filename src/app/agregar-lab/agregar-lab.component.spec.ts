import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarLabComponent } from './agregar-lab.component';

describe('AgregarLabComponent', () => {
  let component: AgregarLabComponent;
  let fixture: ComponentFixture<AgregarLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
