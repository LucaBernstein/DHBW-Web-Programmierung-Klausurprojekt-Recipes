import { Component, OnInit } from '@angular/core';
import { GroupBy, ShoppingItem, ShoppingItemsService } from '../shopping-items.service';

@Component({
    selector: 'app-items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

    constructor(private shoppingItemsService: ShoppingItemsService) { }

    ngOnInit() {
        this.shoppingItemsService.getAllItems().subscribe(e => this.dataSource = e);
    }

    dataSource;
    displayedColumns: string[] = ['name', 'unit', 'defaultQuantity', 'addToBasket', 'delete'];

    isGroup(index, item): boolean {
        return item.isGroupBy;
    }
}
