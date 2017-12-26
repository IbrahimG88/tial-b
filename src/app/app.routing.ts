import { Routes, RouterModule } from "@angular/router";

import { AuthenticationComponent } from "./auth/authentication.component";

import { AUTH_ROUTES } from "./auth/auth.routes";

import {eventComponent} from "./events/event.component";

// path after'/' in the url, and heads to which component which is also imported
// in this file too
//when localhost/3000 is the url it will redirectTo '/messages'
// 'full': angular will try to match a given url path with a one given in the
//routes paths
const APP_ROUTES: Routes = [
    { path:'', redirectTo: '/events', pathMatch: 'full'},
    { path:'events', component: eventComponent },
    { path: 'auth', component: AuthenticationComponent , children: AUTH_ROUTES }
    ];
//the first line means: if you have '' only or'/'and nothing after it in the url redirect to /messages,
//'/' is the path to be fully matched

//the next line is to make angular aware of our routes check the imports too:
//routermodule is also imported in the app.module.ts
//routing is added to the imports and not declarations
export const routing = RouterModule.forRoot(APP_ROUTES);
