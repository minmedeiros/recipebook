import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, DoCheck, OnDestroy {
  ingredients: Ingredient[];
  private subs: Subscription;
  constructor(private shoppinglistService: ShoppingListService) {
  }

  ngOnInit() {
    this.ingredients=this.shoppinglistService.getIngredients();
    this.subs = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[])=> {
        this.ingredients = ingredients;
      }
    );
  }

  ngDoCheck(){
    //this.ingredients=this.shoppinglistService.getIngredients();
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }
}
