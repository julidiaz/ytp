// A User service: provides the users information to the app

// Needed to use the @Injectable decorator,
// needed to define the service as injectable to the components that need it (Dependency Injection)
import { Injectable }	from '@angular/core';

// We import the User class, needed in the service
import { User }			from './user';
// We import the mock users file with the users data
import { USERS } 		from './mock-users';

// A service is a export class, with the @Injectable decorator
// TypeScript uses this decorator to emit META-DATA about the service
// Angular uses this META-DATA to inject other dependencies into this service; our service
// doesn't have any dependencies at this moment, but WE ADD THE DECORATOR ANYWAY, because its
// a BETTER PRACTICE to apply the decorator from the start, both for consistency and for future-proofing
@Injectable() export class UserService {

	// Methods() ---------------

	// getUsers(): returns an array of User, with the user data
	// UPDATE: a SERVICES is, by its own nature, ASYNCHRONOUS; it means that we request the service
	// some data, and the service will responde in a concrete moment in future
	// So we need a mechanism for the service to answer our request; this mechanism are PROMISES -> the service
	// make us a "promise" to call a funcion (CALLBACK FUNCTION) that WE PROVIDE to the service, WITH THE DATA
	// requested OR WITH AN ERROR, if the service was not able to get the data; normally, the service tries to get
	// the data from a SERVER (through a HTTP REQUEST)

	// So we modify the getUsers() method to use a Promise ...
	getUsers(): Promise<User[]> {
		return Promise.resolve(USERS);
	}

	// getUsersSlowly(): a slow version of the method, for testing purposes
	getUsersSlowly(): Promise<User[]> {
		return new Promise(resolve => {
			// Simulates server latency with 2 second delay
			setTimeout(() => resolve(this.getUsers()), 2000);
		})
	}

	/*getUsers(): User[] {
		return USERS;

	}*/
}

