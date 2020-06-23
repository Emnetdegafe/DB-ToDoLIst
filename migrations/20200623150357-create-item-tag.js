'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itemTags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      todoItemId: {
        type: Sequelize.INTEGER,
        refernces: {
          model: "todoItems",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
      tagId: {
        type: Sequelize.INTEGER,
        refernces: {
          model: "tags",
          key:"id"
        },
        onUpdate:"CASCADE",
        onDelete:"CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('itemTags');
  }
};