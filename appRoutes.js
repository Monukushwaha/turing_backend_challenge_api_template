
// var sql = require('../config');
// console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")


// module.exports=function(router){


// // Task 2.1

// router.get('/categories',function(req,res){
//     sql.query('SELECT * FROM category', (error, result) => {
//         if (error) throw error;
 
//         res.send(result);
//     });
// });

// // Task 2.2
// router.get('/categories/:id',function(req,res){
//     const id = req.params.id;
//     sql.query('SELECT * FROM category WHERE category_id=?',id, (error, result) => {
//         if (error) throw error;
 
//         res.send(result);
//     });
// });

// // Task 2.3
// router.get('/categories/inProduct/:category_name',function(req,res){
//     const category_name = req.params.category_name;
//     sql.query('SELECT category_id,department_id,name  FROM  category WHERE name=?',category_name, (error, result) => {
//         if (error) throw error;
//         res.send(result);
//     });
// });

// // Task 2.4
// router.get('/categories/inDepartment/:department_id',function(req,res){
//     const department_id = req.params.department_id;
//     sql.query('SELECT * FROM  category WHERE department_id=?',department_id, (error, result) => {
//         if (error) throw error;
 
//         res.send(result);
//     });
// });




// // Task 3.1

// router.get('/attributes',function(req,res){

//     sql.query('SELECT * FROM attribute ',(error,result) => {
//         if (error) throw error;
//         res.send(result);
//     });
// });

// // Task 3.2

// router.get('/attributes/:id',function(req,res){
//     const id = req.params.id;
//     sql.query('SELECT * FROM  attribute WHERE attribute_id=?',id, (error, result) => {
//         if (error) throw error;
 
//         res.send(result);
//     });
// });

// // Task 3.3
// router.get('/attributes/value/:id',function(req,res){
//     const id =req.params.id;
//     sql.query('SELECT * FROM attribute_value WHERE attribute_id=?',id,(error,result) => {
//         if (error) throw error;
//         res.send(result);
//     });
// });

// // Task 3.4
// router.get('/attributes/inProduct/:id',function(req,res){
//     const id =req.params.id;
//     sql.query('SELECT * FROM attribute_value WHERE attribute_id=?',id,(error,result) => {
//         if (error) throw error;
//         res.send(result);
//     });
// });


// // Task 4.1

// router.get('/product',function(req,res){
//     sql.query('SELECT * FROM product',(error,result) => {
//         if (error) throw error;
//         res.send(result);
//     });
// });
// };