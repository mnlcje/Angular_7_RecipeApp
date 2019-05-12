import { Component, Output,EventEmitter } from "@angular/core";
import { Recipe } from '../recipes.model';

@Component({
    selector:'app-recipe-list',
    templateUrl:'./recipe-list.component.html'
})

export class RecipeListComponent
{
    @Output() selectedRecipe = new EventEmitter<Recipe>();
    
    recipes : Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
     ];

     onRecipeSelected(selectedRecipe : Recipe){
         this.selectedRecipe.emit(selectedRecipe);
     }
}