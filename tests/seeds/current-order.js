exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(() => {
      return knex('orders').insert([
        {
          id: 1,
          date: 1524718675000,
          is_complete: false,
          owner_id: 2
        }
      ])
    })
}
