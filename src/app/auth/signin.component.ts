import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent {
    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    //means when the component is created the form is
    //created too
    ngOnInit() {
        this.myForm = new FormGroup({
            //will add an array of validators for email
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}