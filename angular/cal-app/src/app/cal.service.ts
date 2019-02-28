import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalService {

  constructor() { }
  getData(_number,_limit){
    let data =[]
    for(let i=2;i<_limit;i++){
      let result ={
        number1 : _number,
        number2: i,
        sum : _number + i,
        diff :  _number - i,
        mul :  _number * i,
        div : _number/i
      }
      data.push(result)
    }
    return data
  }
}