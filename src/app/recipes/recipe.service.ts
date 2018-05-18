import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Hola elias es pato', 'A test maybe', 'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
        new Recipe('Elias es mariquito', 'A test maybe', 'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
      ];

    getRecipes() {
        return this.recipes.slice(); // colocamos slice para obtener una copia y no el array de la instancia
    }
}