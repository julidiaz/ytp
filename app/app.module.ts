import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
// We import FormsModule to allow two-way data binding
// in forms fields
import { FormsModule }		from '@angular/forms';

// The main app component
import { AppComponent }  	from './app.component';
// Making our custom components recognized by the app
import { UserDetailComponent } from './user-detail.component';


@NgModule({
	// We have also need to add FormsModule here ...
	imports:      [ BrowserModule, FormsModule ],
	// In "declarations" we declare all the components needed/used in the app ...
  	declarations: [ AppComponent, UserDetailComponent ],
  	// In "bootstrap", the initial component to be fired up when the app starts (usually, the root component, AppComponent)
  	bootstrap:    [ AppComponent ]
})
export class AppModule { }
