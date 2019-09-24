var sql = require('../config');

module.exports=function(router)
{
    // Task 1.1
router.get('/departments',function(req,res){
    sql.query('SELECT * FROM department', (error, result) => {
    if (error) throw error;

    res.send(result);
});
});

// Task 1.2
router.get('/departments/:id',function(req,res){
    const id = req.params.id;
    sql.query('SELECT * FROM department WHERE department_id=?',id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});

    
};
