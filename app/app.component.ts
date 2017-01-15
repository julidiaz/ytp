import { Component } 	from '@angular/core';

@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
})
export class AppComponent {

	// Properties ------------------

	titleApp: string 		= 'YTP';
	versionApp: string		= 'Development Version 1.0';

	// Methods() ------------------
}