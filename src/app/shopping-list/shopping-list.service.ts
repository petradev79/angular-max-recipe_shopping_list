import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

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

    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
