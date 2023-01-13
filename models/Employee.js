const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
      name:{
            type: string
      },
      position:{
            type: string
      },
      Phone:{

            type: string
      },
      age:{
        type: number
      },timestamp:true})

const Employee = mongoose.model('Employee',employeeSchema)
model.exports= Employee