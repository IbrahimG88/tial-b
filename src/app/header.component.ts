import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
    <header class="row">
    <nav class="col-md-8 col-md-offset-2">
        <ul class="nav nav-pills">

            
            <li  routerLinkActive="active"><a [routerLink]="['auth']">Authentication</a></li>
            <li  routerLinkActive="active"><a [routerLink]="['events']">Create Event</a></li>
        </ul>
        </nav>
        </header>
    `
})
export class HeaderComponent {

}

//routerLinkActive belongs to angular
//will add the actice css class highlighting the nested html related to the active routerlink