import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onsubmit(data)
  {
    console.warn(data)
  }



reg={
  name:"Abin",
  contact:9072110962,
  pincode:691021,
  email:"abinabraham@gmail.com",
  password:"abinabin"
}

}
