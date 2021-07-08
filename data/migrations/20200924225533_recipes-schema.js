exports.up = function (knex) {
    return knex.schema
        .createTable("ingredients", (tbl) => {
            tbl.increments("id");
            tbl.string("ingredient_name", 128).notNullable();
        })
        .createTable("recipes", (tbl) => {
            tbl.increments("id");
            tbl.string("recipe_name", 128).notNullable().unique();
            tbl.integer("servings");
        })
        .createTable("steps", (tbl) => {
            tbl.increments("id");
            tbl.integer("step_number");
            tbl.string("step", 128).notNullable().unique();
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("recipes.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
        })
        .createTable("recipes_ingredients", (tbl) => {
            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("ingredients.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("recipes.id")
                .onUpdate("CASCADE")
                .onDelete("CASCADE");
            tbl.float("amount_ingredient").notNullable();
            tbl.integer("preparing_time").notNullable();
            tbl.integer("cooking_time").notNullable();
            tbl.primary(["ingredient_id", "recipe_id"]);
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("recipes_ingredients")
        .dropTableIfExists("steps")
        .dropTableIfExists("recipes")
        .dropTableIfExists("ingredients");
};
