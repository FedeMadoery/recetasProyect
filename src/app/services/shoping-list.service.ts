import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";

@Injectable()
export class ShopingListService {

  addedIngredient = new EventEmitter<string>();
  editIngredient = new EventEmitter<Ingredient>()

  ingredients: Ingredient[] = [
    new Ingredient('Manzanas',5),
    new Ingredient('Harina',1)
  ];
  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredientToAdd: Ingredient) {
    var exist = false;
    for (let ing of this.ingredients) {
      if (ing.name == ingredientToAdd.name) {
        exist = true;
        this.addedIngredient.emit("Existing Ingredient");
        break;
      }
    }
    if (!exist) {
      this.ingredients.push(ingredientToAdd);
    }
  }

  deleteIngredient(idIngredient: number){
    this.ingredients.splice(idIngredient,1);
  }

  addIngredientFromRecipe(ingredients: Ingredient[]){
    var addedIng: boolean = false;
    var ingFound: Ingredient[];
    for(let ingToAdd of ingredients) {
      for (let ing of this.ingredients) {
        if(ing.name === ingToAdd.name){
          ing.amount = ing.amount+ingToAdd.amount;
          ingFound.push(ing);
          this.ingredients.splice(ing.id,1)
          addedIng = true;
        }
      }
      if(!addedIng) {
        this.ingredients.push(ingToAdd)
      }
    }
  }
}

