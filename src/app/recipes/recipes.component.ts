import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeClicked: Recipe
  constructor() { }

  ngOnInit() {
  }

  onRecipeClicked(recipeToDetail: Recipe){
    this.recipeClicked = recipeToDetail;
  }
}
