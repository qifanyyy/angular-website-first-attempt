import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {viewClassName} from '@angular/compiler';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {
  // @ts-ignore
  @ViewChild('shoppingListName') shoppingListName: ElementRef;
  @ViewChild('shoppingListAmount') shoppingListAmount: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();

  form = true;
  // @ts-ignore
  @NgModule(
    { imports: [ ReactiveFormsModule, FormsModule]}
  )
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onClickAddIngredient() {
    this.IngredientAdded.emit(new Ingredient(
      this.shoppingListName.nativeElement.value,
      this.shoppingListAmount.nativeElement.value
  ));
  }
}
