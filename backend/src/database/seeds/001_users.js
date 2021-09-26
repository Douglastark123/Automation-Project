
exports.seed = knex => knex('users')
  .del()
  .then(() => knex('users')
    .insert([
      { username: "douglastark123" },
      { username: "gszim" }
    ])
  );
