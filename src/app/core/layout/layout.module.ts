import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from '../page/login/login.component';
import { RegisterComponent } from '../page/register/register.component';
import { HeaderComponent } from '../navigation/header/header.component';
import { HomeComponent } from '../page/home/home.component';
import { FooterComponent } from '../navigation/footer/footer.component';
import { ProtectedComponent } from '../page/protected/protected.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProtectedComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LayoutModule { }
