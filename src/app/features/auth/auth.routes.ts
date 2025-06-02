import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const authRoutes: Routes = [
    {title: 'Login', path: 'login', component: LoginComponent},
    {title: 'Register', path: 'register', component: RegisterComponent}
];