
exports.up = function(knex, Promise) {
  try {
    const tableExists = await knex.schema.hasTable('requests');
    if (!tableExists) {
        return knex.schema.createTable('requests', function (table) {
            table.increments();
            table.index('user_id').notNullable();
            table.index('organization_id').notNullable();
            table.index('employee_id').notNullable();
            table.enum('request_type', ['maternity', 'health', 'travel', 'education',     'liesure']).notNullable();
            table.date('start_date').notNullable();
            table.date('end_date').notNullable();
            table.string('status').notNullable();
            table.timestamps();                
            
            table.index('user_id');
            table.index('organization_id');           
            table.index('start_date');
            table.index('end_date');
            table.index('request_type');
        });
    } else {
        console.log('Table already exist');
        process.exit(1);
    }
} catch (error) {
    console.log(error);
  }
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('requests');
};
