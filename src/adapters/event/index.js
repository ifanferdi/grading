const rabbitKey = 'rabbit_ifan'

async function consumer(repositories) {
  const { rabbitMqRepo, taskRepository } = repositories

  await rabbitMqRepo.subscribeQueue(rabbitKey, async function (cb) {
    const task = await taskRepository.show(cb.id)

    if (task.endTime === cb.endTime)
      await taskRepository.update(cb.id, { status: 'overdue' })
  })
}

module.exports = async (repositories, useCases) => {
  await consumer(repositories)
}
