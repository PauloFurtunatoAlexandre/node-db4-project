const db = require("../data/db-config.js");

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id) {
    return db("recipes_ingredients")
        .join(
            "ingredients as i",
            "i.id",
            "=",
            "recipes_ingredients.ingredient_id"
        )
        .select(
            "i.ingredient_name",
            "recipes_ingredients.amount_ingredient"
        )
        .where({ recipe_id })
        .first();
}

function getInstructions(recipe_id) {
    return db("steps")
        .join("recipes", "recipes.id", "=", "steps.recipe_id")
        .select("recipes.recipe_name", "steps.step_number", "steps.step")
        .where({ recipe_id })
        .orderBy("steps.step_number");
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};
