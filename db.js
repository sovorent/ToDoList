var mongojs = require('mongojs');

var databaseUrl = 'todolistsdb';
var collections = 'lists';

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};