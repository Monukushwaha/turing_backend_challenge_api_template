var express=require('express')
var bodyParser=require('body-parser');

var sql = require('./config');
var app = express();
var router = express.Router();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

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


// Task 2.1

router.get('/categories',function(req,res){
    sql.query('SELECT * FROM category', (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});

// Task 2.2
router.get('/categories/:id',function(req,res){
    const id = req.params.id;
    sql.query('SELECT * FROM category WHERE category_id=?',id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});

// Task 2.3
router.get('/categories/inDepartment/:id',function(req,res){
    const id = req.params.id;
    sql.query('SELECT category_id,department_id,name  FROM  category WHERE name=?',id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});

// Task 2.4
router.get('/categories/inDepartment/:id',function(req,res){
    const id = req.params.id;
    sql.query('SELECT * FROM  category WHERE department_id=?',id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});


// Task 3.1

router.get('/attributes',function(req,res){

    sql.query('SELECT * FROM attribute ',(error,result) => {
        if (error) throw error;
        res.send(result);
    });
});

// Task 3.2

router.get('/attributes/:id',function(req,res){
    const id = req.params.id;
    sql.query('SELECT * FROM  attribute WHERE attribute_id=?',id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});

// Task 3.3
router.get('/attributes/value/:id',function(req,res){
    const id =req.params.id;
    sql.query('SELECT * FROM attribute_value WHERE attribute_id=?',id,(error,result) => {
        if (error) throw error;
        res.send(result);
    });
});


port = process.env.PORT || 5000;
app.listen(port);
app.use('/api', router);
console.log('API server started on: ' + port);