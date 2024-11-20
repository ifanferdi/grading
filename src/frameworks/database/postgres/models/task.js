const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const Task = sequelize.define(
    'Task',
    {
      // Model attributes are defined here
      name: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      startTime: { type: DataTypes.TIME, allowNull: false },
      endTime: { type: DataTypes.TIME, allowNull: false },
      userId: { type: DataTypes.TIME, allowNull: false },
      parentId: { type: DataTypes.TIME, allowNull: true },
      projectId: { type: DataTypes.TIME, allowNull: false }
    },
    {
      timestamps: false,
      tableName: 'tasks'
    }
  )

  Task.belongsTo(require('./user')(sequelize), {
    foreignKey: 'userId',
    as: 'user'
  })
  Task.belongsTo(require('./project')(sequelize), {
    foreignKey: 'projectId',
    as: 'project'
  })
  Task.hasMany(Task, { foreignKey: 'parentId', as: 'child' })

  return Task
}
