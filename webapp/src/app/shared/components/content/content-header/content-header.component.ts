import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

interface IUrlArray {
  element: string;
  last: boolean;
}

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss'],
})
export class ContentHeaderComponent {
  @Input() title: string = 'Título';

  urlArray: IUrlArray[] = [];

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.createBreadcrumb();
  }

  createBreadcrumb() {
    const currentUrl = this.location.path();
    const urls = currentUrl.split('/');
  
    this.urlArray = urls
      .filter(element => element !== '' && element !== 'dashboard')
      .map((element, index, array) => {
        if (element === 'new' || !isNaN(parseInt(element))) {
          return { element: 'form', last: index === array.length - 1 };
        } else {
          return { element, last: index === array.length - 1 };
        }
      });
  }
  
}
