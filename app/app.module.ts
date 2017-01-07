import { NgModule }      	from '@angular/core';
import { BrowserModule } 	from '@angular/platform-browser';
// We import FormsModule to allow two-way data binding
// in forms fields
import { FormsModule }		from '@angular/forms';
import { AppComponent }  	from './app.component';

@NgModule({
	// We have also need to add FormsModule here ...
	imports:      [ BrowserModule, FormsModule ],
  	declarations: [ AppComponent ],
  	bootstrap:    [ AppComponent ]
})
export class AppModule { }
