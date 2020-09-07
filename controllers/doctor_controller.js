const Doctor = require('../models/doctor')
// register the doctor
module.exports.register = function(req, res){
    Doctor.findOne({email: req.body.email}, function(err, doctor){

        if (!doctor){
            Doctor.create(req.body, function(err, doctor){
                if(err){
                    console.log(`Error in creating doctor:${error}`)
                    return res.json(409,{
                        message:'Error in creating user'
                    })
                }

                return res.redirect('/users/sign-in');
            })
        }else{
             return res.json(200,{
                message:'Registration Successful'
            })
        }

    });
}
