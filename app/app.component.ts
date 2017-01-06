import { Component } from '@angular/core';

// Here we can define other classes used in the app, if needed ...
// We need to include the "export" keyword to make the class available outside this component
export class User {
	id: number;
	fullName: string;
	login: string;
	password: string
}

@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
})
export class AppComponent  { 
	titleApp: string 		= 'YTP';
	versionApp: string		= 'Development Version 1.0';

	// We create an initial user
	oneUser: User = {
		id: 1,
		fullName: 'The WebMaster',
		login: 'juliancoder',
		password: 'coder2020'	
	};
}
