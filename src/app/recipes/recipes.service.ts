import { Recipe } from './recipes.model';
import { EventEmitter } from '@angular/core';

export class RecipeService
{
    private recipes:Recipe[] = [
        new Recipe
        ( 'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
        ),
        new Recipe
        (
         'Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'            
        )
    ];

    recipeSelected = new EventEmitter<Recipe>();

    getRecipes()
    {
        //Return a copy of the recipe array
        return this.recipes.slice();
    }
    
    


}