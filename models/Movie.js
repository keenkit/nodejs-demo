var mongodb = require('./mongodb');

var Schema = mongodb.mongoose.Schema;

// Define the movie schema
var MovieSchema = new Schema({
    rating : {
        max : Number,
        average : Number,
        stars   : String,
        min : Number
    },
    genres  : [String],
    title   : String,
    casts   : [{
        alt : String,
        avatars : [{
            small   : String,
            large   : String,
            medium  : String
        }],
        name    : String,
        id  : String
    }],
    collect_count : Number,
    original_title  : String,
    subtype : String,
    directors   : [{
        alt : String,
        avatars : [{
            small   : String,
            large   : String,
            medium  : String
        }],
        name    : String,
        id  : String
    }],
    year    : Number,
    images  : {
        small   : String,
        large   : String,
        medium  : String
    },
    alt : String,
    id  : Number
});

var Movie = mongodb.mongoose.model("Movie", MovieSchema);

var MovieDAO = function(){};

MovieDAO.prototype.save = function(obj, callback) {
    var instance = new Movie(obj);
    instance.save(function(err){
        callback(err);
    });
};

MovieDAO.prototype.findByIdAndUpdate = function(obj,callback){
    var _id=obj._id;
    delete obj._id;
    Movie.findOneAndUpdate(_id, obj, function(err,obj){
        callback(err, obj);
    });
}

// To return one movie filter by Title
MovieDAO.prototype.findByTitle = function(name, callback) {
    Movie.findOne({title : name}, function(err, obj){
        if(err) console.log(err);
        else console.log(obj.title);
        callback(err, obj);
    });
};

// To find all records
MovieDAO.prototype.find = function(callback) {
    Movie.find(function(err, obj){
        if(err) console.log(err);
        else console.log(obj);
        callback(err, obj);
    });
};

// Remove a movie filter by title
MovieDAO.prototype.deleteByTitle = function(name, callback) {
    Movie.findOne({ title : name}, function (err, model) {
        if (err) {
            console.log('the shit error:' + err);
            return;
        } else {
            model.remove(function (err) {
                callback(err);
                console.log('Great! Removed.');
            });
        }
    });
}

module.exports = new MovieDAO();