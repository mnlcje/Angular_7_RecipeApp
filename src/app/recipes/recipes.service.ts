import { Recipe } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{
    constructor(private shoppingListService:ShoppingListService){}
    
    private recipes:Recipe[] = [
        new Recipe
        ( 'Tasty Schnitzel',
        'A super-tasty Schnitzel - just awesome!',
        'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
        [
            new Ingredient('Meat',1),
            new Ingredient('French Fries',1)            
        ]
        ),
        new Recipe
        (
         'Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
            new Ingredient('Bun',1),
            new Ingredient('Meat',1)
        ]            
        )
    ];
    
    getRecipes()
    {
        //Return a copy of the recipe array
        return this.recipes.slice();
    }

    getRecipeById(index:number)
    {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[])
    {
        this.shoppingListService.addIngreddients(ingredients);
    }

}