import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() refresh?: boolean = false;
  @Input() maximize?: boolean = true;
  @Input() collapse?: boolean = true;
  @Input() remove?: boolean = false;
  @Input() title?: string;
  @Input() cardColor?: string = 'info';
}
