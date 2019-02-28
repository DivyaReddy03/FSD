var employees;
employees = [
    {
        empId: 1,
        empName: 'Vedha',
        empSalary: 30000
    },
    {
        empId: 2,
        empName: 'Bindu',
        empSalary: 35000
    },
    {
        empId: 3,
        empName: 'Divya',
        empSalary: 45000
    },
    {
        empId: 4,
        empName: 'Pallavi',
        empSalary: 28000
    },
    {
        empId: 5,
        empName: 'Shravani',
        empSalary: 30000
    },
    {
        empId: 6,
        empName: 'Ravali',
        empSalary: 20000
    },
    {
        empId: 7,
        empName: 'Bob',
        empSalary: 19000
    },
    {
        empId: 8,
        empName: 'Jhon',
        empSalary: 14000
    },
    {
        empId: 9,
        empName: 'Barb',
        empSalary: 13000
    },
    {
        empId: 10,
        empName: 'Emma',
        empSalary: 16000
    }
];
var getEmployeeBySalary = function (employees) {
    return employees.filter(function (e) { return e.empSalary >= 20000 && e.empSalary <= 50000; }).map(function (a) { return a.empName + "=>" + a.empSalary; });
};
console.log(getEmployeeBySalary(employees));
var getEmpSalary = function (employees) {
    return employees.filter(function (e) { return e.empSalary >= 20000 && e.empSalary <= 50000; });
};
//console.log(getEmpSalary(employees))
