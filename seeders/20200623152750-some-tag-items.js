"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "itemTags",
      [
        {
          tagId: 2,
          todoItemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          todoItemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          todoItemId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          todoItemId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          todoItemId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("itemTags", null, {});
  },
};
