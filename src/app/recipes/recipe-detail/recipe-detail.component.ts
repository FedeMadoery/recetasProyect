import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../../services/recipe-service.service";
import {Ingredient} from "../../shared/ingredients.model";
import {ShopingListService} from "../../services/shoping-list.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private shopService: ShopingListService) { }

  ngOnInit(){
    this.recipeService.clickedRecipe.subscribe((recipeToDetail: Recipe, recipeId: number) => {
      this.recipe = recipeToDetail;
    });
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id);
    this.recipe = null;
  }

  addToIngredient(ingredient: Ingredient){
    ingredient.amount++;
  }

  reduceIngredient(ingredient: Ingredient){
    ingredient.amount--;
  }
  deleteIngredient(id: number){
    this.recipe.ingredients.splice(id,1);
  }
  addToShopingList(){
    this.shopService.addIngredientFromRecipe(this.recipe.ingredients);
  }

}
