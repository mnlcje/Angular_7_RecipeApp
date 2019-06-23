import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipes.service';
import { Recipe } from '../recipes/recipes.model';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService
{
    constructor(private httpC: HttpClient, 
               private recipeService : RecipeService,
               private authService : AuthService
        )
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
        return this.authService.user.pipe(
        take(1),
        //Chapter-20 ; Sec-298
        exhaustMap(user => {
            return this.httpC.get<Recipe[]>
             (
              'https://ng-recipe-book-63ace.firebaseio.com/recipes.json',
              {
                  params : new HttpParams().set('auth', user.token)
              }
             );
            }),
            map(response => {
                return response.map(response => {
                    return {
                        ...response,
                        ingredients: response.ingredients ? response.ingredients : []                                   
                    };
                });
            }),
            tap(response => {
                this.recipeService.setRecipe(response);
            })
          );        
       }

}