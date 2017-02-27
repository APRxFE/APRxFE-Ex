import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { FireCorx } from '../../ngModules/FireCorx'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
	constructor(
		public fireCorx: FireCorx
	){}	
}