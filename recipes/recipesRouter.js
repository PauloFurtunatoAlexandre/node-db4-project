const express = require("express");

const router = express.Router();

const Recipes = require("./recipesDB.js");

router.get("/", async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes("recipes").then((recipes) => {
            res.status(200).json(recipes);
        });
    } catch {
        res.status(500).json({ message: "Could not retrieve the recipes." });
    }
});

module.exports = router;