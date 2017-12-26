import { Routes } from "@angular/router";

import { SignupComponent } from "./signup.component";
import { SigninComponent } from "./signin.component";
import { LogoutComponent } from "./logout.component";

export const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }

];


//the path will not be absolute but relative from
//the auth path

//due to app.routing.ts if localhost/auth is selected then this AUTH_routes
//are used with the path:'' is equal to localhost/auth

//these are child routes to localhost/auth

//we exported these routes to be
//visible in app.routing.ts

//in app.routing.ts used this line using the children built in property and
//imported the auth_routes:
//{ path: 'auth', component: AuthenticationComponent , children: AUTH_ROUTES }
