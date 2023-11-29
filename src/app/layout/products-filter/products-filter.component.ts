import { Component, Output, EventEmitter } from '@angular/core';
import { CATEGORIES } from '../../constants/constants';

@Component({
    selector: 'app-products-filter',
    templateUrl: './products-filter.component.html',
    styleUrl: './products-filter.component.css',
})
export class ProductsFilterComponent {
    categories: string[];
    selectedCategory: string = CATEGORIES[0];
    @Output() getCategoryProp: EventEmitter<string> = new EventEmitter();

    constructor() {
        this.categories = CATEGORIES;
    }

    getCategoryEmit(): void {
        this.getCategoryProp.emit(this.selectedCategory);
    }
}
