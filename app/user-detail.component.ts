import { Component, Input } from '@angular/core';

// Import User class
import { User } from './user';

@Component({
	moduleId: module.id,
  	selector: 'user-detail',
  	templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent {

	// Properties -------------

	// In our UserDetailComponent, the "user" property receives
	// the data from the user selected ("userSelected" property in parent's component, AppComponent)
	// So this property is an INPUT property, beceuse receives data, so we need to use the @Input decorator
	// Without it, the binding used in the app.component.html template wouldn't work: <user-detail [user]="selectedUser"></user-detail>
	@Input() user: User;

	isSaveable: boolean		= true;	// Indicates if the component is saveable
	isUnchanged: boolean	= true; // Indicates if the component is unchanged
	isSpecial: boolean		= true;	// Indicates if the component is special

	// For testing purpose: we want to test the ngClass directive
	isUserCredentials: boolean	= false;


	// Methods() --------------

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