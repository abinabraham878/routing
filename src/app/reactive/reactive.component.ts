import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loginform=new FormGroup({
  Name:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]*')]),
  Username:new FormControl('',[Validators.required, Validators.email]),
  password:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(14)])
})

onsubmit(data)
  {
    console.warn(data)
  }
  get Name(){
    return this.loginform.get('Name');
  }
  get Username(){
    return this.loginform.get('Username');
  }
  get password(){
    return this.loginform.get('password');
}

}
