import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService
{
    ingreedientsAdded = new EventEmitter<Ingredient[]>();

    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ]; 

      public getIngredients()
      {
          //Return a copy of ingredient array. Slice method returns new Array object
          return this.ingredients.slice();
      }

      public addIngredient(ingredient: Ingredient)
      {
          this.ingredients.push(ingredient);
          //Emit a copy of the updated ingredient array
          this.ingreedientsAdded.emit(this.ingredients.slice());
      }

      public addIngreddients(ingredients:Ingredient[])
      {
          this.ingredients.push(...ingredients);
          //Emit a copy of the updated ingredient array
          this.ingreedientsAdded.emit(this.ingredients.slice());      
      }
    
}