const Patient = require('../models/patient')
// register the new patient
module.exports.register = function(req, res){
    Patient.findOne({phone: req.body.phone}, function(err, patient){
        
        if (!patient){
            Patient.create(req.body, function(err, patient){
                if(err){
                    console.log(`Error in creating patient:${error}`)
                    return res.json(409,{
                        message:'Error in creating user'
                    })
                }else{
                    return res.json(200,{
                        message:'Registration Successful'
                    })
                }

            })
        }else{
            return res.json(409,{
                message:'User already exists',
                details:patient 
            })
        }

    });
}
