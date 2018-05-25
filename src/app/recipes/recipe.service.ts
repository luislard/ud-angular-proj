import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    constructor(private slService: ShoppingListService) {}
    
    private recipes: Recipe[] = [
        new Recipe(
            'Hola elias es un loser',
            'loser loser',
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

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}