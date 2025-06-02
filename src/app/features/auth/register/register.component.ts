import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { InputComponent } from "../../../shared/common/input/input.component";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'movies-auth-register',
    styleUrls: ['./register.component.scss'],
    templateUrl: './register.component.html',
    imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        InputComponent
    ]
})
export class RegisterComponent {

    constructor(private fb: FormBuilder) {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required]],
            confirmPassword: ['', [Validators.required]]
        });
    }

    registerForm: FormGroup;
    
    onRegister() {
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }
        const { email, password, confirmPassword } = this.registerForm.value;
    }
}