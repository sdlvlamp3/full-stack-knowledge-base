import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{

  recipes: Recipe[] = [
    new Recipe('Test Recipe','This is a test', 'https://www.sandiegoprosthodontics.com/files/2018/09/Recipes-Banner.jpg')
  ];

  constructor() {

  }

  ngOnInit(){

  }
}
