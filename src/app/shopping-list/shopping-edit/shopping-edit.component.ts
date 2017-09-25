import {Component, Input, OnInit,} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Input('ingredientToEdit') ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

  onAdd(){

  }
  onDelete(){

  }
  onClean(){
    this.ingredient = new Ingredient("",null)
  }
}
