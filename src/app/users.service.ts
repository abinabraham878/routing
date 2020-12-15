import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

getdata()
{
  return{
    name:'Peter',
    age:25,
    contact:9072110962
  }
}



}
