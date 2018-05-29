import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private slService: ShoppingListService) { }

  @ViewChild('f') ingredientForm: NgForm;
  // @ViewChild('nameInput') ingredientName: ElementRef;
  // @ViewChild('amountInput') ingredientAmount: ElementRef;

  ingredient: Ingredient = {name: '', amount: 0};

  ngOnInit() {
  }

  // addIngredient() {
  //   const ingredient = new Ingredient(this.ingredientName.nativeElement.value, 
  //                                     this.ingredientAmount.nativeElement.value);
  //   this.slService.addIngredient(ingredient);
  // }

  onSubmit() {
    this.ingredient.name = this.ingredientForm.value.name;
    this.ingredient.amount = this.ingredientForm.value.amount;
    this.slService.addIngredient(this.ingredient);
    console.log(this.ingredient);
  }

}
