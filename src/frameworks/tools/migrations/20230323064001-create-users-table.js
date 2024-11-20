'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: { type: DataTypes.TEXT, allowNull: false },
      gender: { type: DataTypes.TEXT, allowNull: false },
      role: { type: DataTypes.TEXT, allowNull: false }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users')
  }
}
