const execute=(action:string, x:number, y:number)=>
{
    let result:number;
    switch(action){
    case 'ADD':
    result=_add(x,y)
    break
    case 'DIFF':
    result=_sub(x,y)
    break
    case 'MUL':
    result=_mul(x,y)
    break
    case 'DIV':
    result=_div(x,y)
    break
}

return result;
}
const _add=(x:number, y:number)=>{
    return x+y;
}
const _sub=(x:number, y:number)=>{
    return x-y;
}
const _mul=(x:number, y:number)=>{
    return x*y;
}
const _div=(x:number, y:number)=>{
    return x/y;
}
console.log(execute("DIV", 5, 6));