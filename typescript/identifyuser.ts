
interface employees{
    name:string,
    email:string,
    empId:String,
    salary:number
}
class Service
{
     users:employees[]
    constructor(users:employees[])
    {
        this.users=users;
    }
   
}

class Business 
{   
        name:string;
        email:string;
        constructor(name:string, email:string)
    {
        this.name=name;
        this.email=email;
        
    }
    
}
const s1=new Service([{name:'Bob', email:'bob@gmail.com', empId:'0009A1', salary:20000},{name:'Barb', email:'barb@gmail.com', empId:'0009f1', salary:500000}] );
const b1=new Business('Barb', 'barb1@gmail.com');
const identifyUser=(mail)=>
{
    /*if (obj instanceof Service)
    {
        console.log('this is employee')
    }
    else{
        console.log('self employeed')
    }*/
    for(let index=0; index<s1.users.length; index++)
{
    if(s1.users[index].email==mail)
    {
        console.log('this is employee') 
    }
    
}

    console.log('self employed')




}

identifyUser("barb@gmail.com");
