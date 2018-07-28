exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('localchara')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('localchara').insert([
        /*Kumamon http://www.yurugp.jp/vote/detail.php?id=00000001 Kumamoto
        Barii-san http://www.yurugp.jp/vote/detail.php?id=00000002 daiiti_insatsu_company
        Nishiko-kun http://www.yurugp.jp/vote/detail.php?id=00000003 nishikokun_project
        Reruhi-san http://www.yurugp.jp/vote/detail.php?id=00000010 Niigata
        Gunma-chan http://www.yurugp.jp/vote/detail.php?id=00000018 Gunma
        Sanomaru http://www.yurugp.jp/vote/detail.php?id=00000020 Tochigi
        Momomaru http://www.yurugp.jp/vote/detail.php?id=00000007
        Middle-aged http://www.yurugp.jp/vote/detail.php?id=00000355 up-right
        Chiba-kun http://www.yurugp.jp/vote/detail.php?id=00000367 Chiba
        Riso-nya http://www.yurugp.jp/vote/detail.php?id=00002751 Risona-group
        
        Dr. Crocodile http://www.yurugp.jp/vote/detail.php?id=00003705 Osakia-univ
        Unari-kun http://www.yurugp.jp/vote/detail.php?id=00000031 Chiba
         */
        {
          name: 'Kumamon',
          gender: 'N/A',
          skill: 'kawaii',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000001'
        },
        {
          name: 'Barii-san',
          gender: 'N/A',
          skill: 'kawaii',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000002'
        },
        {
          name: 'Nishiko-kun',
          gender: 'M',
          skill: 'kawaii',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000003'
        },
        {
          name: 'Reruhi-san',
          gender: 'M',
          skill: 'cooking',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000010'
        },
        {
          name: 'Gunma-chan',
          gender: 'F',
          skill: 'kawaii',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000018'
        },
        {
          name: 'Sanomaru',
          gender: 'N/A',
          skill: 'dash and dance',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000020'
        },
        {
          name: 'Momomaru',
          gender: 'N/A',
          skill: 'kawaii',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000007'
        },
        {
          name: 'Middle-aged',
          gender: 'M',
          skill: 'speaks as well as human',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000355'
        },
        {
          name: 'http://www.yurugp.jp/vote/detail.php?id=00000355',
          gender: 'N/A',
          skill: 'a',
          url: ''
        },
        {
          name: 'Chiba-kun',
          gender: 'N/A',
          skill: 'kendo',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000367'
        },
        {
          name: 'Riso-nya',
          gender: 'N/A',
          skill: 'write fish name in kanji',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00002751'
        },
        {
          name: 'Dr. Crocodile',
          gender: 'M',
          skill: 'mathmatic',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00003705'
        },
        {
          name: 'Unari-kun',
          gender: 'M',
          skill: 'hit and run',
          url: 'http://www.yurugp.jp/vote/detail.php?id=00000031'
        }
      ]);
    });
};
