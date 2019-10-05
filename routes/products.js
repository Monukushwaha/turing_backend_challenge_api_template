var connection = require('../config');
module.exports=function(router){
    router.get('/products',function(req,res){

    
    var sql = "SELECT * from product ";
    const existingParams = ["product_id", "name"].filter(field => req.query[field]);
    const pageNum = req.query.p || 2;
    const PageSize = req.query.p_size || 30;


    if (existingParams.length!==0) {
        console.log("iam")
        sql += " WHERE ";
        sql += existingParams.map(field => `${field} = ?`).join(" AND ");
    }
    sql += ` LIMIT  ${(pageNum - 1) * PageSize},${PageSize}`;
    
    connection.query(
        sql,
        existingParams.map(field => req.query[field]),
        function (error, results, fields) {
            res.json({"status": 200, "error": null, "total_record_count": 604, "page_number": pageNum, "page_size": PageSize, "total_pages": 7, "has_more": true, "records": results});
        }
    );
    
});


// TASK 4.3

router.get('/products/:product_id',function(req,res){
    const id = req.params.product_id;
    connection.query('SELECT * FROM  product WHERE product_id=?',id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});


// TASK 4.4

router.get('/products/inCategory/:category_id',function(req,res){
    const id = req.params.category_id;
    connection.query('SELECT * FROM product INNER JOIN category ON product.product_id=category.category_id;',id, (error, result) => {
        if (error) throw error;
 
        res.send(result);
    });
});





        
    
    
    
}