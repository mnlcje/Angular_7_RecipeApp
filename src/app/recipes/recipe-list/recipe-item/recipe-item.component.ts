import { Component, Input, EventEmitter, Output } from "@angular/core";
import { Recipe } from '../../recipes.model';

@Component({
selector:'app-recipe-item',
templateUrl:'./recipe-item.component.html'
})
export class RecipeIemComponent{
    
    @Input() recipe:Recipe;

    @Output() recipeSelected = new EventEmitter<void>();

    onSelected(){
        this.recipeSelected.emit();
    }
}