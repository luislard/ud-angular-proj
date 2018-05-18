import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'Hola elias es pato',
            'A test maybe',
            'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
            [
                new Ingredient('azucar', 2),
                new Ingredient('leche', 1),
            ]
        ),
        new Recipe(
            'Elias es mariquito',
            'A test maybe',
            'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
            [
                new Ingredient('cafe', 2),
                new Ingredient('mantequilla', 1),
            ]
        )
      ];

    getRecipes() {
        return this.recipes.slice(); // colocamos slice para obtener una copia y no el array de la instancia
    }
}