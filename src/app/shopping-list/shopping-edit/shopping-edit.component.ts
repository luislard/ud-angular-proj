import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  constructor(private slService: ShoppingListService) { }

  @ViewChild('f') ingredientForm: NgForm;
  // @ViewChild('nameInput') ingredientName: ElementRef;
  // @ViewChild('amountInput') ingredientAmount: ElementRef;

  ingredient: Ingredient = {name: '', amount: 0};
  ingredientEditSubscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  ngOnInit() {
    this.ingredientEditSubscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);
        this.ingredientForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  // addIngredient() {
  //   const ingredient = new Ingredient(this.ingredientName.nativeElement.value, 
  //                                     this.ingredientAmount.nativeElement.value);
  //   this.slService.addIngredient(ingredient);
  // }

  onSubmit() {
    this.ingredient.name = this.ingredientForm.value.name;
    this.ingredient.amount = this.ingredientForm.value.amount;
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, this.ingredient);
    }else{
      this.slService.addIngredient(this.ingredient);
    }
    this.editMode = false;
    this.ingredientForm.reset();
  }


  ngOnDestroy(): void {
    this.ingredientEditSubscription.unsubscribe();
    
  }

}
