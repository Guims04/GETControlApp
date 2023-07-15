import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPerfilComponent } from './sidebar-perfil.component';

describe('SidebarPerfilComponent', () => {
  let component: SidebarPerfilComponent;
  let fixture: ComponentFixture<SidebarPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarPerfilComponent]
    });
    fixture = TestBed.createComponent(SidebarPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
