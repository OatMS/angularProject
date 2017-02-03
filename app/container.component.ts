import {Component} from 'angular2/core';
import {Content} from './content.component.ts';

@Component({
	selector: 'my-container',
	template: `
  	<div class="boxcon" >
  	  myContainer Component
  	  <my-content></my-content>
  	</div>`,
	directives: [Content]
})
export class Container {}