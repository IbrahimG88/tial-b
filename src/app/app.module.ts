import { NgModule } from '@angular/core';
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';


import { eventComponent } from "./events/event.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {LogoutComponent} from "./auth/logout.component";
import {SigninComponent} from "./auth/signin.component";
import {SignupComponent} from "./auth/signup.component";
import {routing} from "./app.routing";
import {HeaderComponent} from "./header.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [AppComponent, eventComponent, AuthenticationComponent,  LogoutComponent, SigninComponent,
    SignupComponent, HeaderComponent],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpClientModule

    ],
    bootstrap: [AppComponent]
})
export class AppModule{

}


//TODO save the event in mongo and in the backend
