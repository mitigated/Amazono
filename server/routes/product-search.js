const router = require('express').Router();

const algoliasearch = require('algoliasearch');
const client = algoliasearch('L09I5L64BA','c2cb4695480cd05c0a39baf7a0af13ac');
const index = client.initIndex('amazonov1');

router.get('/', (req,res,next)=>{
    if(req.query.query){
        index.search({
            query : req.query.query,
            page : req.query.page
        },(err,content) =>{
            res.json({
                success : true,
                message : 'Here is your search',
                status : 200,
                content : content,
                search_result : req.query.query
            });
        });
    }
});

module.exports = router;

