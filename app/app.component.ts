import {Component} from 'angular2/core';
import {Head} from './head.component.ts';
import {Left} from './left.component.ts';
import {Container} from './container.component.ts';
import {Foot} from './foot.component.ts';

@Component({
	selector: 'my-app',
	template: `
  	<div class="app" >
  	  myApp Component
  	  <div style="padding:10px;" >
    	  <my-head></my-head>
    	  <my-left></my-left>
    	  <my-container></my-container>
    	  <my-foot></my-foot>
  	  </div>
  	</div>`,
	directives: [Head, Left, Container, Foot]
})
export class App {}