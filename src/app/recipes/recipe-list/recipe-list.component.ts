import {Component} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Borch", "Ukrainian national soup", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXlhcbYxZCkR_Zf2BR-t37K1y17wqhKaK0cw&usqp=CAU")
  ]
}
