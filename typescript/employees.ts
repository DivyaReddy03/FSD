interface emp{
    empId:number,
    empName:string,
    empSalary:number
}



let employees:emp[]
employees=[
    {
        empId:1,
        empName:'Vedha',
        empSalary:30000
    },
    {
        empId:2,
        empName:'Bindu',
        empSalary:35000
    },
    {
        empId:3,
        empName:'Divya',
        empSalary:45000
    },
    {
        empId:4,
        empName:'Pallavi',
        empSalary:28000
    },
    {
        empId:5,
        empName:'Shravani',
        empSalary:30000
    },
    {
        empId:6,
        empName:'Ravali',
        empSalary:20000
    },
    {
        empId:7,
        empName:'Bob',
        empSalary:19000
    },
    {
        empId:8,
        empName:'Jhon',
        empSalary:14000
    },
    {
        empId:9,
        empName:'Barb',
        empSalary:13000
    },
    {
        empId:10,
        empName:'Emma',
        empSalary:16000
    }

]
const getEmployeeBySalary = (employees:emp[])=>{
    return employees.filter(e=>e.empSalary>=20000 && e.empSalary<=50000).map(e=>{return e.empName+"=>"+e.empSalary})
}
console.log(getEmployeeBySalary(employees))

//console.log(getEmpSalary(employees))


