
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.string('make').notNullable();
        tbl.string('model').notNullable();
        tbl.string('VIN').unique().notNullable();
        tbl.decimal("mileage");
        tbl.string('transmission');
        tbl.string('title');
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
};
