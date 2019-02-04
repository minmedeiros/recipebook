import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService {
    //newAct = new EventEmitter<{name: string, amount: number, action: string}>()
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ];

    addIngredient(newAct: {name: string, amount: number, action: string}){
        this.ingredients.push(new Ingredient(newAct.name, newAct.amount));
        this.ingredientsChanged.next(this.ingredients.slice());
        //newAct.action == 'add' ? this.ingredients.push(new Ingredient(newAct.name, newAct.amount)) : '';
        //newAct.action == 'clear' ? this.ingredients = [] : '';
    }

    getIngredients(){
        return this.ingredients.slice();
    }

}