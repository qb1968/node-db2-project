
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      const cars = [
        { make: 'Dodge', model: 'Challenger', VIN: '1HGBH41KXML109186', mileage: null, transmission: 'auto', title: 'clean' },
        { make: 'Chevy', model: 'Camaro', VIN: '1HGJF41KXML109186', mileage: 32909, transmission: 'manual', title: 'salvaged' },
        { make: 'BMW', model: 'M3', VIN: '1HSFH41KXML109186', mileage: 75678, transmission: 'auto', title: 'clean' },
        { make: 'Ford', model: 'Mustang', VIN: '1HGBH41KXML109194', mileage: 132445, transmission: 'auto', title: 'totalled' }
    ];
    return knex("cars").insert(cars);
    });
};
