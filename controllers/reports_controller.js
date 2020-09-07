const Report = require('../models/patient_report');
const Patient = require('../models/patient');
// function to create a new report
module.exports.createReport = function(req,res){
    const { passport } = req.session;
    // getting details of the doctor from current session
    const doctor = passport.user;
    Patient.findById(req.params.id,function(err,patient){
        if(err){
            console.log(`Error in finding patient  ${err}`);
            return res.json(422,{
                message:"No Patient with ID found"
            })
        }
        Report.create({
            doctor:doctor.name,
            patient:patient.name,
            status:req.body.status
        },function(err,report){
            if(err){
                console.log('Error in creating report');
                return res.json(422,{
                    message:"Internal Server Error"
                })
            }
            patient.reports.push(report);
            patient.save();
            return res.json(200,{
                message:"Report created Successfully",
                details:report
            });
        })

    })
    
}