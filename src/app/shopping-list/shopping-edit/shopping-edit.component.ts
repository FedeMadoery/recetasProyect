import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";
import {ShopingListService} from "../../services/shoping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   ingredient: Ingredient;

  constructor(private shopService: ShopingListService) { }

  ngOnInit() {
    this.onClean();
    this.shopService.editIngredient.subscribe((ingredientToEdit: Ingredient) =>{
      this.ingredient = ingredientToEdit;
    })
  }

  onAdd(){
    this.shopService.addIngredient(new Ingredient(this.ingredient.name,this.ingredient.amount));
  }
  onDelete(){
    this.shopService.deleteIngredient(this.ingredient.id);
  }
  onClean(){
    this.ingredient = new Ingredient("",null)
  }
}
