import { Component, Input } from '@angular/core';

import { User } from './user';

@Component({
	moduleId: module.id,
  	selector: 'user-detail',
  	templateUrl: 'user-detail.component.html'
})
export class UserDetailComponent {

	// Properties -------------
	@Input() user: User;


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