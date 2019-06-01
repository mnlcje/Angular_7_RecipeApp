import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService
{
    //Eventemitter Approach for cross Componenet Communication
    //ingredientsAdded = new EventEmitter<Ingredient[]>();

    //Subject Approach for cross Componenet Communication
    ingredientsAdded = new Subject<Ingredient[]>();


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
          //Eventemitter Approach - Emit a copy of the updated ingredient array
          //this.ingredientsAdded.emit(this.ingredients.slice());

          //Subject Approach - Emit a copy of the updated ingredient array
          this.ingredientsAdded.next(this.ingredients.slice());
      
      }

      public addIngreddients(ingredients:Ingredient[])
      {
          this.ingredients.push(...ingredients);
          //Eventemitter Approach - Emit a copy of the updated ingredient array
          //this.ingredientsAdded.emit(this.ingredients.slice());  
          
          //Subject Approach - Emit a copy of the updated ingredient array
          this.ingredientsAdded.next(this.ingredients.slice());          
      }
    
}