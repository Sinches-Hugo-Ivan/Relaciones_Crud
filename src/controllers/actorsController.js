const db = require("../database/models");

module.exports = {
    
    list : (req,res) =>{
        db.Actor.findAll()
            .then(actors =>{
                res.send(actors)
            })
    },

    detail : (req,res) =>{
        db.Actor.findByPk(req.params.id,{
            include : [{association : "movies"}]
        })
            .then(actor =>{
                db.Movie.findByPk(actor.favorite_movie_id)
                    .then(movie =>{
                        res.render("actorDetail",{actor,movie})
                    })

            })
    }
}