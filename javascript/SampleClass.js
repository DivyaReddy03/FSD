/*const displayMessage=()=>{
//console.log('Hello World');
document.write('Hello World')
const sampleObj=new Sample;
sampleObj.showMessage();
}
class Sample{
    showMessage(){
        console.log('Sample showMessage Called')
    }
   
}*/
const calculate= ()=>{

    const num1=parseInt(document.getElementById('num1').value);
    const num2=parseInt(document.getElementById('num2').value);
    const operand=document.getElementById('operand').value;
    const calculatorObj=new Calculator();
    let result=0;
    switch(operand)
    {
        case 'add':
        result=`sum is, ${calculatorObj.add(num1, num2)}`;
        break;
        case 'multiply':
        result=`product is, ${calculatorObj.multiply(num1, num2)}`;
        break;
        case 'diff':
        result=`diff is, ${calculatorObj.difference(num1, num2)}`;
        break;
        default:
        result=0;

    }
    const resultant=document.getElementById('result');
resultant.innerHTML=result;

}
class Calculator{
    add(num1, num2)
    {
        return num1+num2;
    }
    multiply(num1, num2){
        return num1*num2;
    }
    difference(num1, num2)
    {
        return num1-num2;

    }
        
   
}