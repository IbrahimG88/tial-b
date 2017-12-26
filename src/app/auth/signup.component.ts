import { Component, OnInit } from "@angular/core";

import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {
    myForm: FormGroup;

    onSubmit(){
        console.log(this.myForm);
        this.myForm.reset();
    }

    //means when the component is created the form is
    //created too
    ngOnInit() {
        this.myForm = new FormGroup({
            //here write your controls with its key eg firstName
            firstName: new FormControl(null, Validators.required),
            lastName: new FormControl(null, Validators.required),
            //will add an array of validators for email
            email: new FormControl(null,[
                Validators.required,
                Validators.pattern("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
}

//app.module we will need to add ReactiveFormsModule