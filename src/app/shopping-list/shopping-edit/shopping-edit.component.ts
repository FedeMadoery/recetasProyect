import {Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @Input('ingredientToEdit') ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

  onAdd(){
    this.addIngredient.emit(new Ingredient(this.ingredient.name,this.ingredient.amount));
  }
  onDelete(){

  }
  onClean(){
    this.ingredient = new Ingredient("",null)
  }
}
