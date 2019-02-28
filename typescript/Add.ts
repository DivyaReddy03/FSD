import { IOperation } from "./Operations";

export namespace Operation{
    export class Addition implements IOperation{
        _operate=(_first:number,_next:number)=>{
            return _first + _next
        }
    }
}