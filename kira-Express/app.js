const express = require('express')

const arr = [
    {id:1,game:'Red Dead Redemption-2'},
    {id:2,game:'God of War'},
    {id:3,game:'Resident Evil'},
    {id:4,game:'Assasins Creed Black Flag'},
    {id:5,game:'Far Cry-3'},
]

const app = express()
app.get('/home',(req,res)=>{
    res.send("This is My first Express JS program")
})

app.get('/about',(req,res)=>{
    res.send('Redirected to the Second Page')
})

app.get('/contact',(req,res)=>{
    res.send('Redirected to the Third Page of the browser')
})

app.get('/games/:arr.id',(req,res)=>{
    //console.log(req.params)
    res.send(req.params.id)
})

app.listen(3000,()=>console.log('Port 3000 is running '))