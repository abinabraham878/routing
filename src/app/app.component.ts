import { Component } from '@angular/core';
import { from } from 'rxjs';
import { UsersService } from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';

Name="";
age
contact


constructor (private user:UsersService)
{
  console.warn(this.user.getdata());
  this.Name=this.user.getdata().name;
  this.age=this.user.getdata().age;
  this.contact=this.user.getdata().contact;
}




}
