import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../shopping-items.service';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

    constructor(private shoppingItemsService: ShoppingItemsService) { }

    ingredients;
    dataSource;

    displayedColumns: string[] = ['name', 'defaultQuantity', 'unit', 'delete'];

    ngOnInit() {
        this.shoppingItemsService.getAllItems().subscribe(e => this.ingredients = e);
        this.dataSource = new MatTableDataSource(this.ingredients);
    }

    addIngredient() {
        // TODO: Stub
    }

}
