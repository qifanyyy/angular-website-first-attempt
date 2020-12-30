import {Component, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [new Ingredient('apple',  6),
                               new Ingredient('banana', 5)];
  ingredient: Ingredient;
  constructor() { }

  ngOnInit(): void {
  }
  onAddedToIngredients(ingredient){
    this.ingredients.push(ingredient);
  }
}
