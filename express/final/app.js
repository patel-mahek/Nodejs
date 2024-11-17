const express = require('express')
const app = express()
const {people} = require('./data.js')


app.use(express.static('./methods-public'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/login',(req,res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('TYPE NAME!!!')
})

app.get('/api/people',(req,res)=>{
    res.status('200').json({success:true, data:{people}})
})

app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body
    if(!name){
        return res.status(400).send('Type name')
    }
    const Person = people.find((person)=>person.id === Number(id))
    if(!Person){
        return res.status(404).send('Person not in database')
    }
    if(!name){
        return res.status(400).send('Type name')
    }
    const newPerson = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true,data:newPerson})

})
     


app.listen(5000,()=>{
    console.log('Server is listening on port 5000')
})