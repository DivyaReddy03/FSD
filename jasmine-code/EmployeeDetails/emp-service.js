const fetchEmployeeById =(employees,id)=>{
    return employees.find(e=> e.id == id)
}

const fetchEmployeeByPID=(projects,employees, pId)=>{
   let emp=employees.filter(e=>e.pId == pId)
   let project=projects.find(p=>p.pId == pId)
return{
    project,
    emp
}

}
const fetchByDes=(employees, designation)=>{
    return employees.filter(e=>e.designation==designation)
}


module.exports={
    byId : fetchEmployeeById,
    byPId :fetchEmployeeByPID,
    byDes: fetchByDes
}