const orm = require('../orm');

const Requests = orm.Model.extend({
    tableName: 'requests',
    hasTimestamps: true,
    users: function() {
        return this.belongsTo('Users');
    }
});

module.exports = org.model('Requests', Requests);