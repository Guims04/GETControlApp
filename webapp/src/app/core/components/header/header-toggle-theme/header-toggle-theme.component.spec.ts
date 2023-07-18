import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToggleThemeComponent } from './header-toggle-theme.component';

describe('HeaderToggleThemeComponent', () => {
  let component: HeaderToggleThemeComponent;
  let fixture: ComponentFixture<HeaderToggleThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderToggleThemeComponent]
    });
    fixture = TestBed.createComponent(HeaderToggleThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
