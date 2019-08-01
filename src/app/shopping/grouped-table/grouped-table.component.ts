import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'shopping-grouped-table',
    templateUrl: './grouped-table.component.html',
    styleUrls: ['./grouped-table.component.css']
})
export class GroupedTableComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input() dataSource;
    @Input() displayedColumns;

    isGroup(index, item): boolean {
        return item.isGroupBy;
    }

}
