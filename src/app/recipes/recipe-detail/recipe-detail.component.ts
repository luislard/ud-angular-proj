import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  // recipe: Recipe = { name: 'recipe', description: 'hola', imagePath: '' };

  @Input() recipe: Recipe;

  ngOnInit() {
  }

}
