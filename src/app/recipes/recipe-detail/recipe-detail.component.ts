import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../../services/recipe-service.service";
import {Ingredient} from "../../shared/ingredients.model";
import {ShopingListService} from "../../services/shoping-list.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private shopService: ShopingListService,
              private route: ActivatedRoute) { }

  ngOnInit(){
    /*this.recipeService.clickedRecipe.subscribe((recipeToDetail: Recipe, recipeId: number) => {
      this.recipe = recipeToDetail;
    });*/

    // Me subscribo al cambio de url, para cargar nueva receta
    this.route.params.subscribe( (params: Params) => {
        // Tomo el parametro que viene como string y lo paso a number
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
        }
    );
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
