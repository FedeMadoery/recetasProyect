import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() clickRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] =[
    new Recipe('Receta de prueba','Esta es una receta de prueba - No es rica','http://www.essen.com.ar/imgs/w300-h400-c300.400/contenido/editor/Image/2015/recetas-essen-por-tipo-de-comida.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipeToDetail: Recipe){
    this.clickRecipe.emit(recipeToDetail);
  }
}
