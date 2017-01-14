import { Component } 	from '@angular/core';

// Import User class
import { User } 		from './user';

// We import our new User Service, which provides the users data
// We'll inject the service to our component ...
import { UserService }	from './user.service';

// We need to import this to implement the OnInit interface
// It's necessary to the component's lifecycle, to implement the
// corresponding method ngOnInit() that will fire up in the in the initial moment
// of component's lifecycle
import { OnInit }		from '@angular/core';

@Component({
	moduleId: module.id,
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
  	styleUrls: ['app.component.css'],
  	// With "providers" META-DATA, we tell the injector how to make a UserService, 
  	// by registering a "UserService provider"; from now, the AppComponent can use
  	// that service and ALSO, EVERY CHILD COMPONENT in the component tree!
  	providers: [ UserService ]
})
// Our components implements the OnInit interface, through
// the ngOnInit() method, which fires up in initial moment of the component
export class AppComponent implements OnInit  {
	
	// Properties ------------------------- 
	titleApp: string 		= 'YTP';
	versionApp: string		= 'Development Version 1.0';


	// List of users: we initialize the component's list of users with the 
	// array we created previously; by this property ("listOfUsers") we made accesible 
	// the users info. from the component to the template to show it
	
	// UPDATE: because we've moved the array of users ("USERS") to a mock file (users.ts)
	// and from now we're going to provide the users information through a SERVICE,
	// we initialize our "listOfUsers" property to an empty array
	
	//listOfUsers = USERS;
	listOfUsers: User[];
	
	
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

	// IMPORTANT: we have a new property ("userService") for the UserService
	// The property is created below in the constructor method of the component
	

	// Methods () ---------------------------

	// constructor(): here we use an shortcut-syntax: we use the list of arguments of the constructor
	// to declare and initialize (two actions in one step) a new property ("userService") for the component, used to inject
	// the User Service to the component

	// Now Angular knows how to supply an instance of the UserService (new property "userService") 
	// when it creates a new AppComponent
	// This, in combination with the "providers" META-DATA in the @Component tells the injector how to inject
	// and provide the UserService to our component
	constructor(private userService: UserService) {}

	// ngOnInit(): through this method the component implements the OnInit interface
	// This method is the one we MUST USE to EVERY INITIALIZATIONS (initial data, etc) 
	// NEEDED BY THE COMPONENT IN ITS CREATION moment

	// In our case, its the right place to calling the getUsers() method of the UserService
	// to collect the users information
	// We declare the initialization logic inside AND LEAVE ANGULAR TO CALL IT AT THE RIGHT TIME IN THE COMPONENTS LIFECYCLE
	ngOnInit(): void {
		// Calling to component's getUsers() method
		this.getUsers();
	}


	// onSelect(user): event handler, fired up in component template (app.component.html) when
	// click over an user in the list
	onSelect(user: User): void {
		// We set our "selectedUser" property in component
		// with the user that has been clicked in the template ("user" argument)
		this.selectedUser = user;
	}

	// getUsers(): get the list of users, using the method "getUsers()"
	// of our new UserService
	
	// UPDATE: our UserService's getUsers() method now acts on a PROMISE,
	// so we need to update our component's getUsers() method to adapt to it
	// We need to "ACT" over the Promise when it resolves; when the Promise resolves successfully, "then" we will have users to display
	// We pass OUR CALLBACK function as an argument to the Promise's "then()" method

	/*getUsers(): void {
		this.listOfUsers = this.userService.getUsers();
	}*/

	getUsers(): void {
		// We pass our callback function as an argument to then(); the arrow function notation simplifies the syntax
		// What we're doing in our callback ("listOfUsersCallback") is just setting the component's property "listOfUsers" 
		// to the array of users returned by the service, through our callback ...
		this.userService.getUsers().then(listOfUsersCallback => this.listOfUsers = listOfUsersCallback);
		
		// A version with 2 seconds timeout (simulating a 2 seconds server latency giving the response)
		//this.userService.getUsersSlowly().then(listOfUsersCallback => this.listOfUsers = listOfUsersCallback);
	}
}
