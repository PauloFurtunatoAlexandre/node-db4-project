exports.seed = function (knex) {
    return knex("steps").insert([
        {
            id: 1,
            step_name:
                "Preheat oven to 350 degrees F (175 degrees C). Grease and flour two nine inch round pans.",
            recipe_id: 1,
        },
        {
            id: 2,
            step_name:
                "In a large bowl, stir together the sugar, flour, cocoa, baking powder, baking soda and salt. Add the eggs, milk, oil and vanilla, mix for 2 minutes on medium speed of mixer. Stir in the boiling water last. Batter will be thin. Pour evenly into the prepared pans.",
            recipe_id: 1,
        },
        {
            id: 3,
            step_name:
                "Bake 30 to 35 minutes in the preheated oven, until the cake tests done with a toothpick. Cool in the pans for 10 minutes, then remove to a wire rack to cool completely.",
            recipe_id: 1,
        },
        {
            id: 4,
            step_name:
                "Preheat oven to 325 degrees F (165 degrees C). Grease and flour Bundt pan.",
            recipe_id: 2,
        },
        {
            id: 5,
            step_name:
                "In a medium bowl, sift flour, soda and salt. Set aside.",
            recipe_id: 2,
        },
        {
            id: 6,
            step_name:
                "In a large bowl, cream shortening and sugar until light and fluffy. Add eggs one at a time, mixing well with each addition.",
            recipe_id: 2,
        },
        {
            id: 7,
            step_name: "Add flour mixture and mix in well.",
            recipe_id: 2,
        },
        {
            id: 8,
            step_name: "Add buttermilk and vanilla, and combine.",
            recipe_id: 2,
        },
        {
            id: 9,
            step_name:
                "Pour into prepared Bundt pan. Bake at 325 degrees F (165 degrees C) for 1 hour or until bottom is golden and pick inserted into center comes out clean.",
            recipe_id: 2,
        },
    ]);
};
