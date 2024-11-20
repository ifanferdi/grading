module.exports = (models) => {
  const { task } = models
  function index() {
    return task.findAll()
  }
  function show(id) {
    return task.findByPk(id)
  }
  function create(payload) {
    return task.create(payload)
  }
  function update(id, payload) {
    return task.update(payload, { where: { id }, returning: true })
  }
  function destroy(id) {
    return task.destroy({ where: { id } })
  }
  function relationship() {
    return task.findAll({
      where: { parentId: null },
      include: {
        association: 'child',
        include: { association: 'child', nested: true }
      }
    })
  }

  return { index, show, create, update, destroy, relationship }
}
