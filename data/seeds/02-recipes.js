exports.seed = function (knex) {
  return knex("recipes").insert([
      { id: 1, recipe_name: "chocolate cake", servings: 12 },
      { id: 2, recipe_name: "bread", servings: 10 },
      { id: 3, recipe_name: "banana bread", servings: 8 },
  ]);
};
