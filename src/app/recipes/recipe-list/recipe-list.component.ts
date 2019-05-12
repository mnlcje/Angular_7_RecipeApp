import { Component, Output,EventEmitter, OnInit } from "@angular/core";
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html'
    
})

export class RecipeListComponent implements OnInit
{
    recipes:Recipe[];

    constructor(private recipeService : RecipeService)
    {

    }

    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();
    }
      
}