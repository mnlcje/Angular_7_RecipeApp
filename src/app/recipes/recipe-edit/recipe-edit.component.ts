import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { RecipeService } from '../recipes.service';

@Component({
  selector: '',
  templateUrl: './recipe-edit.component.html',
  })
export class RecipeEditComponent implements OnInit {

  id:number;
  editMode = false;
  recipeForm : FormGroup;

  constructor(private route: ActivatedRoute,
              private recipeService : RecipeService
             ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
      });    
  }

  private initForm(){

    let recipeName = '';
    let recipeImagepath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if(this.editMode)
    {
     const recipe =  this.recipeService.getRecipeById(this.id);
     recipeName = recipe.name;
     recipeImagepath = recipe.imagePath;
     recipeDescription = recipe.description;
    }

    this.recipeForm = new FormGroup({      
      'name' : new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagepath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingrededients': new FormControl(recipeIngredients)
    });
  }

  onSubmit()
  {
    console.log(this.recipeForm);
  }
}
