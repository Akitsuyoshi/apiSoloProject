exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('charas_in_prefecture')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('charas_in_prefecture').insert([
        { character_id: 1, prefecture_id: 43 },
        { character_id: 4, prefecture_id: 15 },
        { character_id: 5, prefecture_id: 10 },
        { character_id: 6, prefecture_id: 9 },
        { character_id: 7, prefecture_id: 40 },
        { character_id: 9, prefecture_id: 12 },
        { character_id: 12, prefecture_id: 12 },
      ]);
    });
};
