import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipes.service';

@Component({
selector:'app-recipe-item',
templateUrl:'./recipe-item.component.html'
})
export class RecipeIemComponent{
    
    @Input() recipe:Recipe;

    constructor(private recipeService : RecipeService)
    {

    }
    onSelected(){
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}