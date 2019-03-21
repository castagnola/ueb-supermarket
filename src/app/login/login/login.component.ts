import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { LoginService } from '../service/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  disable: boolean;
  data: any;

  constructor(private fb: FormBuilder, private loginService: LoginService ) { }

  ngOnInit() {

    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({

      usuario: ["", Validators.required],
      contrasena: ['', Validators.required]
    })



  }
  onSubmit() {
    console.log(this.form.value);
    this.loginService.login(this.form.value).subscribe(response=>{
      data =>console.log(response);
      error=>console.log(error);
    })
  }


}