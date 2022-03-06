import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
errorMessage:string=""
  form= new FormGroup({});
  model={
    email:"",
    password:""
  }
  fields:FormlyFieldConfig[]=[
    {
      key:"usernameOrEmail",
      type:"input",
      templateOptions:{
        label:"Email address",
        placeholder:"Enter email",
        required:true,
      }
    },
    { 
        key:"password",
        type:"input",
        templateOptions:{
          type:"password",
          label:"Password",
          required:true
        }
    }
  ]
  
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(model :any){
    this.authService.login(model.value).subscribe(
      (res)=>{
        
      },
      (err)=>{

      }
    )
  }

}
