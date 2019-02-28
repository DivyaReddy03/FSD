let arr:number[]=[] //or arr=[]
arr[0]=2;
arr[1]=12;
console.log(`Length of an array:${arr.length}`)
console.log(arr[0])
console.log(arr[1])
let val=[
    {
        id:1
    }, 
    {
        id:2
    }
]
console.log(val[0])
//descending order
let numbers:number[]=[1, 10, 2, 8]
for(let i1=0; i1<numbers.length; i1++)
{
    
for(let i2=i1+1; i2<numbers.length; i2++)
{
    if(numbers[i1]<numbers[i2])
    {
        /*let temp = numbers[i1];
        numbers[i1] = numbers[i2];
        numbers[i2] = temp;*/
        numbers[i1]=numbers[i1]+numbers[i2]
        numbers[i2]=numbers[i1]-numbers[i2]
        numbers[i1]=numbers[i1]-numbers[i2]
        


    }
}

}
for(let n=0; n<numbers.length; n++)
{
    console.log(numbers[n])
}
//Largest Number
let max=numbers[0];
for(let index=1; index<numbers.length; index++)
{
    if(max<numbers[index])
    {
        max=numbers[index]
    }

}
console.log(`Largest Number is:${max}`)
//Perfect Square Root
function  _squareRoot(n:number)
{
   /* let a:number
    let sqRoot:number

    sqRoot=n/2
    do{
        a=sqRoot
    sqRoot=((a+(n/a))/2);
    }
    
    while((a-sqRoot)!=0)
    
        return sqRoot*/
let half = (n + 2 - 1)/2;
let square = 0;
let isSquare = false;

for( let i = half; i > 0 ; i-- ){

    square = i*i;

    if( square > n )
        continue;

    if( square == n ){
        console.log(`this is a perfect square`)
        isSquare = true;
        break;
    } 

}

if( !isSquare ){
    //System.out.println( "This number is not a perfect square" );
    console.log(`this is not a perfect square num`)
}
    
    

}
//let sq=
_squareRoot(9)
//console.log(`square root of a number is:${sq}`)