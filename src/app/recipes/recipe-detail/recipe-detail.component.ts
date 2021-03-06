import { Component, OnInit} from "@angular/core";
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipes.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
    selector:'app-recipe-detail',
    templateUrl:'./recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit
{
  recipe : Recipe;
  recipeId:number;
  
  constructor(
      private route: ActivatedRoute,
      private router:Router,
      private recipeService:RecipeService
      ){}

   ngOnInit()
      {                
          this.route.params.subscribe((params: Params) => {
            this.recipeId = +params['id'];
            this.recipe = this.recipeService.getRecipeById(this.recipeId);             
          });
      }

      onAddToShoppingList()
      {
        this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
      }

      onEditRecipe()
      {
        this.router.navigate(['edit'],{relativeTo:this.route});
      }

      onDeleteRecipe()
      {
        this.recipeService.deleteRecipe(this.recipeId);
        this.router.navigate(['/recipes']);
      }
}