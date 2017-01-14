import { Component } from '@angular/core';

import { User } from './user';


// We create an array of users
const USERS: User[] = [
	{ id: 1, fullName: 'Patrick Everet', email: 'patrick@user.com', mobile: '600123456', city: 'Cadiz', country: 'Spain', login: 'patriko', password: '123' },
	{ id: 2, fullName: 'Mike Fesch', email: 'mike@user.com', mobile: '655666999', city: 'Seville', country: 'Spain', login: 'miki', password: '456' },
	{ id: 3, fullName: 'Paul Cosman', email: 'paul@user.com', mobile: '678222999', city: 'Malaga', country: 'Spain', login: 'paulino', password: '789' },
	{ id: 4, fullName: 'Billy Ramirez', email: 'billy@user.com', mobile: '699222333', city: 'Jaen', country: 'Spain', login: 'billiam', password: '000' },
	{ id: 5, fullName: 'Sam Vastin', email: 'sam@user.com', mobile: '611222999', city: 'Huelva', country: 'Spain', login: 'samuel', password: '111' },
	{ id: 6, fullName: 'Peter Morris', email: 'peter@user.com', mobile: '655888999', city: 'Almeria', country: 'Spain', login: 'pedrito', password: '222' },
	{ id: 7, fullName: 'Carl Maluna', email: 'carl@user.com', mobile: '699000222', city: 'Granada', country: 'Spain', login: 'carlitos', password: '333' }
];

@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
  	styleUrls: ['app.component.css']
})
export class AppComponent  {
	
	// Properties ------------------------- 
	titleApp: string 		= 'YTP';
	versionApp: string		= 'Development Version 1.0';

	isSaveable: boolean		= true;	// Indicates if the component is saveable
	isUnchanged: boolean	= true; // Indicates if the component is unchanged
	isSpecial: boolean		= true;	// Indicates if the component is special

	// For testing purpose: we want to test the ngClass directive
	isUserCredentials: boolean	= false;

	// List of users: we initialize the component's list of users with the 
	// array we created previously; by this property ("listOfUsers") we made accesible 
	// the users info. from the component to the template to show it
	listOfUsers = USERS;
	
	// We create an initial user ("oneUser"), of type "User"
	// UPDATE: now we don't need anymore this static user;
	// Instead of that, we create a "selectedHero" property to manage and expose
	// from the component the information of the User object that is selected in template
	// We've decided that none of the users should be selected by default before the
	// users picks one of the list, so we don't initialize the "selectedHero" (as we were doing with the static "oneUser" variable)
	selectedUser: User;
	
	/*oneUser: User = {
		id: 1,
		fullName: 'The WebMaster',
		email: 'juliancoder@gmail.com',
		mobile: '652818726',
		city: 'Gades',
		country: 'Spain',
		login: 'juliancoder',
		password: 'coder2020',	
	};*/
	

	// Methods () ---------------------------

	// onSelect(user): event handler, fired up in component template (app.component.html) when
	// click over an user in the list
	onSelect(user: User): void {
		// We set our "selectedUser" property in component
		// with the user that has been clicked in the template ("user" argument)
		this.selectedUser = user;
	}
}
