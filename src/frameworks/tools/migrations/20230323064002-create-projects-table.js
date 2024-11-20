'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: { type: DataTypes.TEXT, allowNull: false }
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('projects')
  }
}
