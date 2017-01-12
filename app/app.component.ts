import { Component } from '@angular/core';

// Here we can define other classes used in the app, if needed ...
// We need to include the "export" keyword to make the class available outside this component
export class User {
	id: number;
	fullName: string;
	email: string;
	mobile: string;
	city: string;
	country: string;
	login: string;
	password: string;
}

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

	// We create an initial user
	oneUser: User = {
		id: 1,
		fullName: 'The WebMaster',
		email: 'juliancoder@gmail.com',
		mobile: '652818726',
		city: 'Gades',
		country: 'Spain',
		login: 'juliancoder',
		password: 'coder2020',	
	};

	// Methods () ---------------------------

	// setCssClasses(): manage the setup of several CSS classes
	// to component elements (HTML template) according to the
	// corresponding properties
	setCssClasses() {

		let cssClasses = {
			isSaveable: this.isSaveable,
			isUnchanged: this.isUnchanged,
			isSpecial: this.isSpecial
		};

		return cssClasses;
	}

	// setCssInlineStyles(): manage the setup of several CSS inline styles
	// to component elements (HTML template) according to the
	// corresponding properties
	// The keys of the object (cssInlineStyles) are the CSS properties;
	// the values bind the component properties and the possible values for the CSS property
	setCssInlineStyles() {

		let cssInlineStyles = {
			'font-style': this.isSaveable ? 'italic' : 'normal',		// italic
			'font-weight': !this.isUnchanged ? 'bold' : 'normal',		// normal
			'font-size': this.isSpecial ? '24px' : '8px'				// 24px
		};

		return cssInlineStyles;
	}
}
