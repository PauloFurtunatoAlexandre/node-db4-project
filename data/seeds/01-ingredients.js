exports.seed = function (knex) {
    return knex("ingredients").insert([
        { id: 1, ingredient_name: "egg" },
        { id: 2, ingredient_name: "milk" },
        { id: 3, ingredient_name: "flour" },
    ]);
};
