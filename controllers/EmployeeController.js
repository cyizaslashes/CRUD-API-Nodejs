const Employee = require('../Models/Employee')


//display the list of employees

const index=(req,res,next)=>{
      Employee.find()
      .then(response=>{
            res.json({

              response
            })
        })
      .catch(error=>{
            res.json({

                message:'An error occured!!!'
            })
        })
        
}

//getting employee by Id

const show =(req,res,next)=>{
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response=>{
        res.json({
            response
        })

    })
    .catch(error=>{
       res.json({
             message: "An error ocurred !!!"
         })

    })
}

//adding employee.....
const store = (req,res,next)=>{
   let employee = new Employee({
   name: req.body.name,
   position: req.body.position,
   phone: req.body.phone,
   age: req.body.age
})
 Employee.save()
    .then(response=>{
       res.json({
        message:"Employee added successfully"
        })
  })
    .catch(error=>{
      res.json({
        message:"An error occured!!!"
      })

  })

}

//updating an employee

const update=(req,res,next)=>{
      let employeeID= req.body.employeeID

      let updatedData={
   
          name: req.body.name,
          position: req.body.position,
          phone: req.body.phone,
          age: req.body.age
    }
    Employee.findByIdAndUpdate(employeeID,{$set:updatedData})
          .then(()=>{
                res.json({
                       message:"Employee updated!!!"
                })
           })
           .catch(error=>{
                res.json({
                         message:"An error occured"
                })
           })

}

//delete Employee

const destroy = (req,res,next)=>{
      let employeeID = req.body.employeeID
      Employee.findByIdAndRemove(employeeID)
      .then(()=>{
            res.json({
             message:"Employee deleted"

            })

      })
      .catch(error=>{
        res.json({
            message:"An error occured!!!"
        })
      })
}

module.exports={

    index, show, store, update, destroy
}