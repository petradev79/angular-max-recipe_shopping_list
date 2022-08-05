import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://assets.cntraveller.in/photos/6164302c536a64b77fac804f/master/pass/navratri-meals-lead.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a test',
      'https://assets.cntraveller.in/photos/6164302c536a64b77fac804f/master/pass/navratri-meals-lead.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
