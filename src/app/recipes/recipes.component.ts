import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  recipeSelected: Recipe;

  updateRecipeSelected(recipe: Recipe) {
    this.recipeSelected = recipe;
  }

  ngOnInit() {
  }

  renderRecipeDetail(recipe: Recipe) {

  }

}
