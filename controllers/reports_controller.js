
// function to create a new report
module.exports.createReport = function(req,res){
    const { passport } = req.session;
    // getting details of the doctor from current session
    const doctor = passport.user;
    return res.json(200,{
        res:req.params.id,
        doctor:passport.user
    });
}