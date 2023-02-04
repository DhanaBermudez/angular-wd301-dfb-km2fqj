import { Component, Input } from '@angular/core';

@Component({
  selector: 'Dhana',
  template: `<h3>DHANA GRACE BERMUDEZ <h3><br><h5>{{name}}</
h5>`,
  styles: [`h1 { font-family: sans-serif; }`],
})
export class HelloComponent {
  @Input() name: string;
}
