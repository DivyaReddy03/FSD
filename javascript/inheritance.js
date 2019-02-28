const one=()=>{
    display.value+="1";
}
const two=()=>{
    display.value+="2";
}
const three=()=>{
    display.value+="3";
}
const four=()=>{
    display.value+="4";

}
const five=()=>{
    display.value+="5";
}
const six=()=>{
    display.value+="6";
}
const seven=()=>{
    display.value+="7";
}
const eight=()=>{
    display.value+="8";
}
const nine=()=>{
    display.value+="9";
}
const zero=()=>{
    display.value+="0";
}
const addition=()=>{
    sessionStorage.setItem('n1',display.value);
    display.value='';
    display.value+='+';
    sessionStorage.setItem('op',display.value);
    display.value='';
    
    //display.value='';
    
}
const substract=()=>{
    sessionStorage.setItem('n1',display.value);
    display.value='';
    display.value+='-';
    sessionStorage.setItem('op',display.value);
    display.value='';
   
}
const multiply=()=>
{
    sessionStorage.setItem('n1',display.value);
    display.value='';
    display.value+='*';
    sessionStorage.setItem('op',display.value);
    display.value='';
}
const divide=()=>
{
sessionStorage.setItem('n1',display.value);
    display.value='';
    display.value+='/';
    sessionStorage.setItem('op',display.value);
    display.value='';
}
const clr=()=>{
    display.value='';
}
const calculate=()=>{
    sessionStorage.setItem('n2',display.value);
    display.value='';
    
    const a=parseInt(sessionStorage.getItem('n1'));
    const operator=sessionStorage.getItem('op');
    const b=parseInt(sessionStorage.getItem('n2'));
    let res=0;
    switch(operator)
    {
        case "+":
            res=a+b;
            break;
        case "-":
        res=a-b
        break;
        case "*":
        res=a*b
        break;
        case "/":
        res=a/b;
        break;
        default:
        res='0';

    }
    display.value=res;

}
 class Operation{
     

}