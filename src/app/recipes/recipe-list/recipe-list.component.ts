import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  recipes: Recipe[] = [(new Recipe('Western dishes', 'LGTM', 'https://cdn.tasteatlas.com/images/dishes/f4291f3e82f84c33a5997f801e8fb24f.jpg'))];

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef no-shadowed-variable
  onDisplayRecipeName(recipe: Recipe){
    return recipe.name;
  }
  // tslint:disable-next-line:typedef
  onDisplayRecipeDescription(recipe: Recipe) {
    return recipe.desscription;
  }
  // tslint:disable-next-line:typedef
  onClickAddRecipe(){
    // tslint:disable-next-line:max-line-length
    this.recipes.push(new Recipe('Western dishes', 'LGTM', 'https://cdn.tasteatlas.com/images/dishes/f4291f3e82f84c33a5997f801e8fb24f.jpg'));
  }
  // tslint:disable-next-line:typedef
  onRemoveRecipe(recipeId: number){
    const position = recipeId + 1;
    this.recipes.splice(position, 1);
  }
}
