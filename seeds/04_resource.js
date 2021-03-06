
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries

    const resources = [{
      name: 'Tacky Souveniers',
      cost_base: 15,
      cost_range: 10,
      qty_base: 20,
      qty_range: 20,
      weight: 0.5,
      img: '../art_assets/resources/tacky_souveniers.gif',
    },{
      name: 'Space Vegetables',
      cost_base: 30,
      cost_range: 20,
      qty_base: 15,
      qty_range: 20,
      weight: 1,
      img: '../art_assets/resources/space_vegetables.gif',
    },{
      name: 'Spare Droid Parts',
      cost_base: 100,
      cost_range: 75,
      qty_base: 10,
      qty_range: 25,
      weight: 8,
      img: '../art_assets/resources/space_droid_parts.gif',
    },{
      name: 'Bio-Meds',
      cost_base: 200,
      cost_range: 150,
      qty_base: 30,
      qty_range: 20,
      weight: 1.5,
      img: '../art_assets/resources/bio_meds.gif',
    },{
      name: 'Garbast Barblezargs',
      cost_base: 400,
      cost_range: 220,
      qty_base: 10,
      qty_range: 15,
      weight: 2,
      img: '../art_assets/resources/garbast_barblezargs.gif',
    },{
      name: 'Ancient Artifacts',
      cost_base: 600,
      cost_range: 500,
      qty_base: 1,
      qty_range: 10,
      weight: 5,
      img: '../art_assets/resources/ancient_artifacts.gif',
    },{
      name: 'Hyper Crystals',
      cost_base: 900,
      cost_range: 700,
      qty_base: 2,
      qty_range: 4,
      weight: 6,
      img: '../art_assets/resources/hyper_crystals.gif',
    },{
      name: 'Spice',
      cost_base: 1400,
      cost_range: 1000,
      qty_base: 15,
      qty_range: 25,
      weight: 0.2,
      img: '../art_assets/resources/spice.gif',
    },{
      name: 'Weaponized Quantonium',
      cost_base: 2200,
      cost_range: 1500,
      qty_base: 1,
      qty_range: 6,
      weight: 12,
      img: '../art_assets/resources/weaponized_quantonium.gif',
    },{
      name: 'Tiny Universe',
      cost_base: 3000,
      cost_range: 1000,
      qty_base: 0,
      qty_range: 2,
      weight: 2,
      img: '../art_assets/resources/tiny_universe.gif',
    }];

    return knex('resource').insert(resources);

    });
};
