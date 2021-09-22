import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  count:number = 5;

  users = [{name:'dani',age:50,gender:'m'},{name:'gani',age:40,gender:'m'},{name:'kani',age:50,gender:'f'}]
  constructor() { }
}
