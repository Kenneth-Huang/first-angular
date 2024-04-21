import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesDiComponent } from './services-di.component';

describe('ServicesDiComponent', () => {
  let component: ServicesDiComponent;
  let fixture: ComponentFixture<ServicesDiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesDiComponent]
    });
    fixture = TestBed.createComponent(ServicesDiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
