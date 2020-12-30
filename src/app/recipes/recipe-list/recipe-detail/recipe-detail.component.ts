import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipes: Recipe[] = [new Recipe('CHINESE', 'GOOD', 'https://s3-media0.fl.yelpcdn.com/bphoto/zgWxZHKUZZf648QamhB34Q/ls.jpg')];
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

}
