import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.css']
})
export class ShoppingItemsComponent implements OnInit {
  // @ts-ignore
  form = true;
  // @ts-ignore
  @NgModule(
    { imports: [ ReactiveFormsModule, FormsModule]}
  )
  constructor() { }

  ngOnInit(): void {
  }

}
