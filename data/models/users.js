const orm = require('../orm'); 

const Users = orm.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    requests: function() {
      return this.hasMany('Requests');
    }
});

module.exports = orm.model('Users', Users);