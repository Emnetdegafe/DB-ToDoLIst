"use strict";
module.exports = (sequelize, DataTypes) => {
  const tag = sequelize.define(
    "tag",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  tag.associate = function (models) {
    tag.belongsToMany(models.todoItem, {
      throught:"itemTages",
      foreignKey: "tagId"
    });
  };
  return tag;
};
