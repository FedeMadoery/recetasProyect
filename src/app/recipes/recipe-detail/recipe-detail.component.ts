import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../../services/recipe-service.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
    this.recipeService.clickedRecipe.subscribe((recipeToDetail: Recipe, recipeId: number) => {
      this.recipe = recipeToDetail;
    });
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id);
    this.recipe = null;
  }

}
