import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
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

  getRecipes() {
    return this.recipes.slice();
  }
}
