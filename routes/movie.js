var express = require('express');
var router = express.Router();
var Movie = require('./../models/Movie.js');

function viewAddMovie(req, res, next){
    if(req.params.name){//update
        return res.render('movie', {
            title:req.params.name+'|basicPython',
            label:'Edit the movie:'+req.params.name,
            movie:req.params.name
        });
    } else {
        return res.render('movie',{
            title:'Add new movie | basicPython',
            label:'Add new movie',
            movie:false
        });
    }
    next();
}

function viewMovieDetail(req, res){
    if (req.params.name == "{{ movie.images.small }}") return
    Movie.findByTitle(req.params.name,function(err, obj){
        return res.render('moviedetail', {
            title:req.params.name+'| basicPython',
            movie:obj
        });
    });
}

function postAddMovie(req, res){
    console.log(req.body.content);
    var json = JSON.parse(req.body.content);
    Movie.save(json, function(err){
        if(err) {
            res.send({'success':false,'err':err});
        } else {
            res.send({'success':true});
        }
    });
}

function viewMovieList(req, res){
    res.render('movielist', { title: 'Move list' });
}

function viewMovieJSON(req, res) {
    Movie.findByTitle(req.params.name,function(err, obj){
        res.send(obj);
    });
}

function viewMovieListJSON(req, res) {
    Movie.find(function(err, obj){
        res.send(obj);
    });
}

function removeMovie(req, res) {
    console.log(req.body.content);
    var title = req.body.content;
    Movie.deleteByTitle(title,function(err){
        if(err) {
            res.send({'success':false,'err':err});
        } else {
            res.send({'success':true});
        }
    });
}

router.get('/add', viewAddMovie);
router.post('/add', postAddMovie);
router.get('/movielist', viewMovieList);    // Need to be over than /:name
router.get('/json/movielist',viewMovieListJSON);    // Need to be over than /json/:name
router.post('/remove', removeMovie);
router.get('/:name',viewMovieDetail);
router.get('/json/:name',viewMovieJSON);


module.exports = router;



