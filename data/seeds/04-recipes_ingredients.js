exports.seed = function (knex) {
  return knex("recipes_ingredients").insert([
      { ingredient_id: 1, recipe_id: 1, amount_ingredient: 3, preparing_time: 30, cooking_time: 40 },
      { ingredient_id: 1, recipe_id: 2, amount_ingredient: 3, preparing_time: 20, cooking_time: 20 },
      { ingredient_id: 1, recipe_id: 3, amount_ingredient: 3, preparing_time: 30, cooking_time: 20 },
  ]);
};
