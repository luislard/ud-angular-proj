import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hola elias es pato', 'A test maybe', 'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg'),
    new Recipe('Elias es mariquito', 'A test maybe', 'http://img.bestrecipes.com.au/RCK3slSo/h300-w400-cscale/br-api/asset/20771/super-easy-pizza-dough-recipe.jpg')
  ];

  @Output() onRecipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  recipeClicked(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }

}
