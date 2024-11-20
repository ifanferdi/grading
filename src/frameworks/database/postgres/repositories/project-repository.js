module.exports = (models) => {
  const { project } = models
  function index() {
    return project.findAll()
  }
  function show(id) {
    return project.findByPk(id)
  }
  function create(payload) {
    return project.create(payload)
  }
  function update(id, payload) {
    return project.update(payload, { where: { id } })
  }
  function destroy(id) {
    return project.destroy({ where: { id } })
  }

  return { index, show, create, update, destroy }
}
