import { Component } from '@angular/core';

import { NgForm } from "@angular/forms";

import { EventService } from "./event.service";

import { Event } from "./event.model";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/observable/throw';

@Component({
    selector: 'app-events',
    templateUrl: './event.component.html',
    providers: [EventService]
})
export class eventComponent {
// private constructor to this specific component; this.service will refer to this constructor
    constructor(private eventService : EventService) { }

    onSubmit(form: NgForm) {

        const event = new Event(
            form.value.creator ,
            form.value.user ,
            form.value.groupName ,
            form.value.location ,
            form.value.date ,
            form.value.startTime ,
            form.value.finishTime ,
            form.value.status ,
            form.value.evaluation
        );



         // this.eventService.addEvent(event);


        // console.log(event);
        this.eventService.addEvent(event);
        form.resetForm();


        // will be filled by adding the event created to something within the
        // service which will be made available here
        //  addMessage(message: Message){
        // this.messages.push(message);
    }
}










