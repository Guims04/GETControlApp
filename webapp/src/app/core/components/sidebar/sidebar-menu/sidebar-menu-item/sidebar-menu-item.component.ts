import { Component, Input } from '@angular/core';

interface MenuItems {
  icon?: string;
  path?: string;
  badge?: string;
  label?: string;
  acl?: string[];
  items?: MenuItems[];
  query?: any[];
}

@Component({
  selector: 'app-sidebar-menu-item',
  templateUrl: './sidebar-menu-item.component.html',
  styleUrls: ['./sidebar-menu-item.component.scss'],
})
export class SidebarMenuItemComponent {
  @Input() item: MenuItems = {};

  constructor() {}

  ngOnInit(): void {}
}
