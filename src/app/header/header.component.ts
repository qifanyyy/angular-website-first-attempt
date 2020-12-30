import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('selected') selectAction = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSelectRecipes(event): void{
    this.selectAction.emit('recipe');
  }
  onSelectShoppingList(event): void {
    this.selectAction.emit( 'shopping-list');
  }
}
