import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Manzanas',5),
    new Ingredient('Harina',1)
  ];
  ingredientToEdit:Ingredient = new Ingredient("",null);
  constructor() { }

  ngOnInit() {
  }
  onClickIngredientToEdit(ingredient: Ingredient){
    this.ingredientToEdit = ingredient;
  }
}
