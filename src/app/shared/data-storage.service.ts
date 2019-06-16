import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipes.model';

@Injectable()
export class DataStorageService
{
    constructor(private httpC: HttpClient, private recipeService : RecipeService)
    {       

    }

    storeRecipes()
    {
        const recipes = this.recipeService.getRecipes();
        this.httpC.put('https://ng-recipe-book-63ace.firebaseio.com/recipes.json',
        recipes
        )
        .subscribe(response =>{
            console.log(response);
        });
    }

    fetchRecipes()
    {
        this.httpC.get<Recipe[]>
        ('https://ng-recipe-book-63ace.firebaseio.com/recipes.json'
        )
        .pipe(
            map(response => {
                return response.map(response => {
                    return {
                        ...response,
                        ingredients: response.ingredients ? response.ingredients : []
                    };
                });
            })
        )
        .subscribe(response=>{
            this.recipeService.setRecipe(response);
        });
        
    }

}