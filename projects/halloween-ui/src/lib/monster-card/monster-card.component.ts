import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-monster-card',
  standalone: true,
  imports: [],
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})

export class MonsterCardComponent {

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() buttonText: string = 'Descubrir';

  @Output() action = new EventEmitter<void>();

  ejecutarAccion() {
    this.action.emit();
  }

}