import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService) {}
    
    private recipes: Recipe[] = [
        new Recipe(
            'Pasticho de la abuela',
            'Un pasticho de puta madre',
            'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg',
            [
                new Ingredient('azucar', 2),
                new Ingredient('leche', 1),
            ]
        ),
        new Recipe(
            'Lasaña',
            'Una mezcla perfcha entre salsas y pasta',
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

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }
    
    updateRecipe(index:number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}