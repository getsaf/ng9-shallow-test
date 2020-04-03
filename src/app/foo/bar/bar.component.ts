import {Component, Input} from '@angular/core';

@Component({
  selector: 'bar',
  template: '<p>BAR: {{text}}</p>'
})
export class BarComponent {
  @Input()
  text!: string;

}
