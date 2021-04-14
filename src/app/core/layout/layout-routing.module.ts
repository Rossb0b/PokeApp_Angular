import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout.component";
import { RegisterComponent } from '../page/register/register.component';
import { LoginComponent } from "../page/login/login.component";
import { HomeComponent } from '../page/home/home.component';
import { ProtectedComponent } from '../page/protected/protected.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'protected',
        component: ProtectedComponent,
        canActivate: [AuthGuard]
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class LayoutRoutingModule { }
