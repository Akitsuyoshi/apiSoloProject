exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('companies')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('companies').insert([
        {
          name: 'daiiti_insatsu_company',
          character_id: '2',
        },
        {
          name: 'nishikokun_project',
          character_id: '3',
        },
        {
          name: 'up-right',
          character_id: '8',
        },
        {
          name: 'Risona-group',
          character_id: '10',
        },
        {
          name: 'Osaka-univ',
          character_id: '11',
        },
      ]);
    });
};
