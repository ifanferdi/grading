module.exports = (repositories) => {
  const { projectRepository } = repositories
  async function index(req, res, next) {
    return res.json(await projectRepository.index())
  }

  async function show(req, res, next) {
    return res.json(await projectRepository.show(req.params.id))
  }

  async function create(req, res, next) {
    return res.json(await projectRepository.create(req.body))
  }

  async function update(req, res, next) {
    return res.json(await projectRepository.update(req.params.id, req.body))
  }

  async function destroy(req, res, next) {
    return res.json(await projectRepository.destroy(req.params.id))
  }

  async function relationship(req, res, next) {
    return res.json(await projectRepository.index())
  }

  return { index, show, create, update, destroy, relationship }
}
