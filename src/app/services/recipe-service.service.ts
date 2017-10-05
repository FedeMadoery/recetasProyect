import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../recipes/recipe.model";
import {Ingredient} from "../shared/ingredients.model";

@Injectable()
export class RecipeService {
  clickedRecipe = new EventEmitter<Recipe>();
  addedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Receta de prueba',
      'Esta es una receta de prueba - No es rica',
      'http://www.essen.com.ar/imgs/w300-h400-c300.400/contenido/editor/Image/2015/recetas-essen-por-tipo-de-comida.jpg',
    [new Ingredient('Pan - Tester',2), new Ingredient('Dulce de Leche - Tester',5), new Ingredient('Coco rallado - Tester', 6)])
  ];

  constructor() {
  }

  addRecipe(newRecipe: Recipe) {
    var exist = false;
    for (let rec of this.recipes) {
      if (rec.name == newRecipe.name) {
        this.addedRecipe.error("Existing Recipe");
        exist = true;
        break;
      }
    }
    if(!exist) {
      this.recipes.push(newRecipe)
    }
  }

  getRecipes(){
    return this.recipes;
  }

  deleteRecipe(recipeId: number){
    this.recipes.splice(recipeId,1);
  }

}
