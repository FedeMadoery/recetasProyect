import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Recipe} from "../../recipe.model";
import {RecipeService} from "../../../services/recipe-service.service";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeElement') recipe: Recipe;
  @Input('recipeId') id: number;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe.id = this.id;
  }

  onClickRecipe(){
    this.recipeService.clickedRecipe.emit(this.recipe);
  }
}
