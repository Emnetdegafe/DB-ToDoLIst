'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('todoItems', [{
        tasks: "go through the reader",
        deadline: "10 pm",
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
     },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('todoItems', null, {});
  }
};
