import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";
import {ShopingListService} from "../services/shoping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  ingredientToEdit:Ingredient = new Ingredient("",null);
  ingredientExist = false;
  constructor(private shopService: ShopingListService) { }

  ngOnInit() {
    this.ingredients= this.shopService.getIngredients();
    this.shopService.addedIngredient.subscribe((error: string) => {
      if(error === "Existing Ingredient"){
        console.log("Funciona")
        this.ingredientExist = true;
      }
    })
  }

  onClickIngredientToEdit(ingredient: Ingredient, idIngredient: number){
    ingredient.id = idIngredient;
    this.shopService.editIngredient.emit(ingredient);
  }

}
