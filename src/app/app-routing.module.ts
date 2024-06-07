import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { SigninComponent } from './signin/signin.component';
import { authGuard } from './service/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponentComponent
  },

  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: 'registration',
    component: RegistrationComponentComponent,

  },
  {
    path: 'department',
    component: DepartmentComponent,
    canActivate: [
      authGuard
    ]
  },
  {
    path: 'signup',
    component: SigninComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
