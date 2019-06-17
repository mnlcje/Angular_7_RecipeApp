import {Component,EventEmitter, Output, OnInit, OnDestroy} from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipes.model';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipes/recipes.service';

@Component({
    templateUrl:'./header.component.html',
    selector:'app-header'
})
export class HeaderComponent implements OnInit,OnDestroy
{
    recipes:Recipe[];
    recipeChangeSubscription : Subscription;
    
    constructor(private recipeService : RecipeService, private dataStorageService : DataStorageService){}

    
    ngOnInit(){
        this.recipeChangeSubscription = this.recipeService.recipeChanged.subscribe(
                                    (recipes:Recipe[])=>{
                                        this.recipes = recipes
                                    }
        );

    }

    onSaveData()
    {
        this.dataStorageService.storeRecipes();
    }

    onFetchData()
    {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    ngOnDestroy()
    {
        this.recipeChangeSubscription.unsubscribe();
    }

    
}