const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const mongooseAlgolia = require('mongoose-algolia');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    category : { type : mongoose.Types.ObjectId, ref:'Category' },
    owner : { type : mongoose.Types.ObjectId, ref:'User' },
    reviews : [{type : Schema.Types.ObjectId, ref : 'Review'}],
    image : String,
    title : String,
    description : String,
    price : Number,
    created : { type : Date, default : Date.now }

},{
    toObject : { virtuals : true },
    toJSON : { virtuals : true }
});

ProductSchema
    .virtual('averageRating')
    .get(function(){
        var rating =0;
        if(this.reviews.length == 0){
            rating =0;
        }else{
            this.reviews.map((review) =>{
                rating+= review.rating;
            });
            rating = rating/this.reviews.length;
        }
        return rating;
    });

ProductSchema.plugin(deepPopulate);
ProductSchema.plugin(mongooseAlgolia, {
    appId : 'L09I5L64BA',
    apiKey : 'c2cb4695480cd05c0a39baf7a0af13ac',
    indexName : 'amazonov1',
    selector : '_id title image reviews description price owner created averageRating',
    populate : {
        path : 'owner reviews',
        select : 'name rating'
    },
    defaults : {
        author : 'uknown'
    },
    mappings : {
        title : function(value){
            return `${value}`
        }

    },
    virtuals : {
        
    },
    debug : true
})

let Model = mongoose.model('Product', ProductSchema);
Model.SyncToAlgolia();
Model.SetAlgoliaSettings({
    searchableAttributes : ['title']
});

module.exports = Model;