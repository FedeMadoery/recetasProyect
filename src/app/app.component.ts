import { Component } from '@angular/core';
import {RecipeService} from "./services/recipe-service.service";
import {ShopingListService} from "./services/shoping-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService, ShopingListService]
})
export class AppComponent {
}
