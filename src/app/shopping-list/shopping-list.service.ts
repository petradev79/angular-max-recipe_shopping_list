import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    const existingIngredient = this.ingredients.find(
      (ing) => ing.name.toLowerCase() === ingredient.name.toLowerCase()
    );

    if (existingIngredient) {
      existingIngredient.amount = existingIngredient.amount + ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    ingredients.forEach((ingredient) => this.addIngredient(ingredient));
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
