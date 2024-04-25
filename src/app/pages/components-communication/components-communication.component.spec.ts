import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsCommunicationComponent } from './components-communication.component';

describe('ComponentsCommunicationComponent', () => {
  let component: ComponentsCommunicationComponent;
  let fixture: ComponentFixture<ComponentsCommunicationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsCommunicationComponent]
    });
    fixture = TestBed.createComponent(ComponentsCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
