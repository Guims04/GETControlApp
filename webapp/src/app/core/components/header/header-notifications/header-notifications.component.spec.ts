import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNotificationsComponent } from './header-notifications.component';

describe('HeaderNotificationsComponent', () => {
  let component: HeaderNotificationsComponent;
  let fixture: ComponentFixture<HeaderNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderNotificationsComponent]
    });
    fixture = TestBed.createComponent(HeaderNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
