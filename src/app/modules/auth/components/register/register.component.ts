import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage:string=""
  form= new FormGroup({});
  model={
    email:"",
    password:""
  }
  fields:FormlyFieldConfig[]=[
   {
     fieldGroupClassName:'row',
     fieldGroup:[
       {
         className:"col-md-6 col-sm-12",
         key:"firstName",
         type:'input',
         templateOptions:{
           type:"text",
           placeholder:'First Name',
           required:true
         }
       }, 
        {
          className:"col-md-6 col-sm-12",
        key:"lastName",
        type:'input',
        templateOptions:{
          type:"text",
          placeholder:'Last Name',
          required:true
        },
        expressionProperties:{
          'templateOptions.disabled':'!model.firstName'
        }
      }
     ]
   },
    {
      key:"usernameOrEmail",
      type:"input",
      templateOptions:{
        placeholder:"Email",
        required:true,
      }
    },
    {
      validators:{
 validation:[
   {name:'fieldMatch',options:{errorPath:'passwordConfirm'}}
 ]
      },
      fieldGroup:[
        { 
          key:"password",
          type:"input",
          templateOptions:{
            type:"password",
            placeholder:"Password",
            minLength:3,
            required:true
          }
      },
      { 
        key:"passwordConfirm",
        type:"input",
        templateOptions:{
          type:"password",
          minLength:3,
          placeholder:'Confirm Password',
          required:true
        }
    }
      ]
    }
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

  register(model:any){

  }
}
