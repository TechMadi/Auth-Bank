import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http"
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';

export  function fieldMatchValdator(control:AbstractControl){
  const {password,passwordConfirm}=control.value

  if(!password || !passwordConfirm){
    return null;
  }
  if (passwordConfirm===password){
    return null;
  }
  return {fieldMatch:{message: 'Password not Matching'}}

}

export function minLengthValidationMessages(err:any,field:any){
  return `Should have atleast ${field.templateOptions.minLength} characters`

}
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validators:[
        {name:'fieldMatch',validation:fieldMatchValdator}

      ],
      validationMessages:[
        {name:'required',message:"This field is required"},
        {name:'minLength',message:minLengthValidationMessages}
      ]
    }),
    FormlyBootstrapModule,
    HttpClientModule
  ]
})
export class AuthModule { }
