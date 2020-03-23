'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
      username: 'geo',
      password: 'test',
      createdAt: new Date(),
      updatedAt:new Date(),
    },
    {
      username: 'geovrisco',
      password: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'user',
      password: 'test',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
