const db = require("../data/db-config.js");

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id) {
    return db("recipes").where({ recipe_id }).first();
}

function getInstructions(recipe_id) {
    return db("steps")
        .join("recipes", "recipe.id", "steps.recipe_id")
        .select("*")
        .where({ recipe_id })
        .orderBy("steps.step");
}

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};
