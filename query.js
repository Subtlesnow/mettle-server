const env = process.env.NODE_ENV || 'development',
    Knex = require('knex'),
    config = require('./knexfile'),
    knex = Knex(config[env]);

module.exports = {
    //create your queries here
    //like so
    get_planets() {
        return knex.select('*').from('planet')
    },
    get_resources() {
        return knex.select('*').from('resource')
    }
}
