import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'A test maybe', 'https://www.iha.com/residence-and-castle-for-rent-jimbaran_59925')
  ];

  constructor() { }

  ngOnInit() {
  }

}
