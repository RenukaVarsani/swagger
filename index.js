const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerJsDocs = YAML.load('./api.yaml')
const app = express()
app.use(express.json())

var users = [
    { id: 1, name: "Tom, Cruise" },
    { id: 2, name: "John Cena" },
  ];
  
app.use("/test",swaggerUI.serve,swaggerUI.setup(swaggerJsDocs))



app.get('/string' , (req,res)=>{
    res.status(200).send("this is string")
})

app.get('/user' ,(req,res)=>{
    const obj = {"id":1,"name":"renuka"}
    res.status(400).send(obj)
})

app.get('/users' , (req,res)=>{
    res.status(400).send(users)
}) 

app.get('/users' , (req,res)=>{
    res.status(400).send(users)
}) 

app.get('/users/:id' , (req,res)=>{
   res.status(200).send(users.find((x) => x.id === parseInt(req.params.id)));
});

app.post('create' , (req,res)=>{
    users = [req.body,...users]
    res.send(users)
})
app.listen(4000, ()=>{
    console.log("port is running on 4000 port");
}) 
