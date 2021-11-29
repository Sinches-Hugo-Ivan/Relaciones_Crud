module.exports = (sequelize, dataTypes) => {
    let alias = 'Actor_movie';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        actor_id: {
            type: dataTypes.STRING
        },
        movie_id: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'actor_movie',
        timestamps: true
    };
    
    const Actor_movie = sequelize.define(alias, cols, config)

    return Actor_movie
}