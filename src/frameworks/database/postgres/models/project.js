const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define(
    'Project',
    {
      // Model attributes are defined here
      name: { type: DataTypes.STRING, allowNull: false }
    },
    {
      timestamps: false,
      tableName: 'projects'
    }
  )
}
