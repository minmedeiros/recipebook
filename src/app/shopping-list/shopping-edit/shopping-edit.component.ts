import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(act: string){
    this.shoppinglistService.addIngredient({name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value, action: act});
    //this.shoppinglistService.newAct.emit({name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value, action: act})
    //this.onFunction.emit({name: this.nameInput.nativeElement.value, amount: this.amountInput.nativeElement.value, action: act});
  }

}
