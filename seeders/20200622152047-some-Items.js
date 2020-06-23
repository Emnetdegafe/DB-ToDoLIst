'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('todoItems', [{
        tasks: "go through the reader",
        deadline: "10 pm",
        todoListId: 3,
        important:true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tasks: "clean bedroom",
        deadline: "tomorrow",
        todoListId: 1,
        important: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tasks: "learn to code",
        deadline: "weekend",
        todoListId: 2,
        important: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        tasks: "have fun",
        deadline: "Wednesday",
        todoListId: 3,
        important: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      }

    ], {});
     },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('todoItems', null, {});
  }
};
