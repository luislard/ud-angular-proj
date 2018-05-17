import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') ingredientAmount: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit() {
  }

  addIngredient() {
    const ingredient = new Ingredient(this.ingredientName.nativeElement.value, 
                                      this.ingredientAmount.nativeElement.value);
    this.ingredientAdded.emit(ingredient);
  }

}
