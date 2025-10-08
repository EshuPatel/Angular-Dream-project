import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular component demonstrates structural directives
// Common module- implementing structural directive { NgIf, ngFor, ngSwitch  }
//  FormModule --implementing attribute directives & 2-way binding --mgModel


@Component({
  selector: 'app-fruits',
  imports: [FormsModule, CommonModule],
  templateUrl: './fruits.component.html',
  styleUrl: './fruits.component.css'
})
export class FruitsComponent {

  show = true;
  view= 'list';
  fruits= ['Apple', 'Banana', 'Mango', 'Orange', 'Kiwi'];


  toggleShow(){
    this.show=! this.show;
  }

   products = [
    { name: 'Laptop', price: 85000, inStock: true },
    { name: 'Smartphone', price: 35000, inStock: false },
    { name: 'Headphones', price: 2500, inStock: true },
    { name: 'Smartwatch', price: 12000, inStock: false },
    { name: 'Keyboard', price: 1500, inStock: true },
    { name: 'Optical Mouse', price: 999, inStock: true }
  ];

  highlightExpensive(price: number) {
    return price > 10000 ? 'expensive' : 'affordable';
  }
}
