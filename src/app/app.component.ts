import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'my-app';
  public loadedString = 'recipe';
  onNavigate(event): void{
    this.loadedString = event;
  }
}
