// Mock users file: a resource with a list of users for testing the app,
// used by the User Service to provide the users information

// We need to import the user class for creating the mock users array ...
import { User }		from './user';

// We need to define the mock users array as exportable to make it
// available to everyone who needs it, as for example, the User Service
export const USERS: User[] = [
	{ id: 1, fullName: 'Patrick Everet', email: 'patrick@user.com', mobile: '600123456', city: 'Cadiz', country: 'Spain', login: 'patriko', password: '123' },
	{ id: 2, fullName: 'Mike Fesch', email: 'mike@user.com', mobile: '655666999', city: 'Seville', country: 'Spain', login: 'miki', password: '456' },
	{ id: 3, fullName: 'Paul Cosman', email: 'paul@user.com', mobile: '678222999', city: 'Malaga', country: 'Spain', login: 'paulino', password: '789' },
	{ id: 4, fullName: 'Billy Ramirez', email: 'billy@user.com', mobile: '699222333', city: 'Jaen', country: 'Spain', login: 'billiam', password: '000' },
	{ id: 5, fullName: 'Sam Vastin', email: 'sam@user.com', mobile: '611222999', city: 'Huelva', country: 'Spain', login: 'samuel', password: '111' },
	{ id: 6, fullName: 'Peter Morris', email: 'peter@user.com', mobile: '655888999', city: 'Almeria', country: 'Spain', login: 'pedrito', password: '222' },
	{ id: 7, fullName: 'Carl Maluna', email: 'carl@user.com', mobile: '699000222', city: 'Granada', country: 'Spain', login: 'carlitos', password: '333' }
];