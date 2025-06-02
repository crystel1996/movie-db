import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { InputComponent } from "../../../shared/common/input/input.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'movies-auth-login',
    styleUrls: ['./login.component.scss'],
    templateUrl: './login.component.html',
    imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        InputComponent
    ]
})
export class LoginComponent {

    constructor(private fb: FormBuilder) {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]]
        });
    }

    loginForm: FormGroup;
    
    onLogin() {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }
        const { email, password } = this.loginForm.value;
    }
}