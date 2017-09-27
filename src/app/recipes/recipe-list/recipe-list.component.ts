import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../../services/recipe-service.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  showAlertError: boolean = false;
  showAlertEmpty: boolean = true;
  recipes: Recipe[];
  alertError: string = "Some Error.";

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.addedRecipe.subscribe((error: string)=> {
        this.alertError = error;
        this.showAlertError = true;
    })
  }

  addRecipe(){
    console.log("Add Recipe Btn");
    this.showAlertEmpty = true;
  }

}
