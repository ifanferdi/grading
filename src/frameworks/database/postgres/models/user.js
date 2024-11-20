const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define(
    'User',
    {
      // Model attributes are defined here
      name: { type: DataTypes.STRING, allowNull: false },
      gender: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.STRING, allowNull: false }
    },
    {
      timestamps: false,
      tableName: 'users'
    }
  )
}
