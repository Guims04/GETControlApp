import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent {
  menuItems = [
    {
      label: 'Dashboard',
      path: 'dashboard',
      icon: 'tachometer-alt',
      acl: [''],
    },
    {
      label: 'Usuários',
      path: 'users',
      icon: 'user',
      acl: [''],
      items: [
        {
          label: 'form',
          path: 'users/new',
        },
      ],
    },
    // {
    //   label: 'Gerenciamento',
    //   icon: 'cog',
    //   acl: [''],
    //   badge: '1',
    //   items: [
    //     {
    //       label: 'Configurações',
    //       path: 'configs',
    //     },
    //   ],
    // },
  ];
}
