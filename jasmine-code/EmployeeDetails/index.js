const express = require('express')
const server = express()
const parser = require('body-parser')
const service = require('./emp-service')
let empdata =require('./empData').employees
let projects=require('./empData').projects
server.use(parser.json())
const PORT=5050
//status of api
server.get('/status',(req, res)=>{
    res.send({message:'server is up & running'})

})
//fetch all employees
server.get('/employees',(req,res)=>{
    res.send({ data: empdata })
})
//fetch employees by Id
server.get('/employees/id/:id',(req,res)=>{
    res.send({
        data : service.byId(empdata,parseInt(req.params.id))
    })
})
//fetch emplyoyees by designation
server.get('/employees/designation/:designation',(req, res)=>{
    res.send({
        data: service.byDes(empdata, (req.params.designation))
    })
})
//fetch employees by project Id
server.get('/employees/pId/:pId', (req, res)=>{
    res.send({data:service.byPId(projects,empdata, (req.params.pId))
    })
})
server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})