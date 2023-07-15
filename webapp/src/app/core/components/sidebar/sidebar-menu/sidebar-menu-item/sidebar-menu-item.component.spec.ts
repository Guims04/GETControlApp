import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarMenuItemComponent } from './sidebar-menu-item.component';

describe('SidebarMenuItemComponent', () => {
  let component: SidebarMenuItemComponent;
  let fixture: ComponentFixture<SidebarMenuItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarMenuItemComponent]
    });
    fixture = TestBed.createComponent(SidebarMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
