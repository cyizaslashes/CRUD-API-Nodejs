const express   = require('express');
const mongoose  = require('mongoose ');
const morgan   = require('morgan ');
const bodyParser   = require('body-Parser');


const EmployeeRoute = require ('./routes/employee')

mongoose.connect('mongodb://localhost:27017/testdb',{useNewUrlParser:true,useUnifiedTopology:true})
const db = mongoose.connection

db.on('erro',(err)=>{
console.log(err)
})

db.once('open',()=>{
console.log('Database connection established!')
})

const app= express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT =proccess.env.PORT || 3000

app.listen(PORT, ()=>{
 console.log('Server is running on port ${PORT}')

})


app.use('/api/employee', EmployeeRoute)
