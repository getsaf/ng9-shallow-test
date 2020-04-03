import {Component, Input} from '@angular/core';

@Component({
  selector: 'foo',
  template: '<p>FOO: {{text}}</p>'
})
export class FooComponent {
  @Input()
  text!: string;

}
