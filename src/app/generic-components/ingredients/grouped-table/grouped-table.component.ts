import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'shopping-grouped-table',
    templateUrl: './grouped-table.component.html',
    styleUrls: ['./grouped-table.component.css']
})
export class GroupedTableComponent implements OnInit {

    @Input() dataSource;

    @Input() displayedColumns;

    @Output() tableEventEmitterBinding = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    isGroup(index, item): boolean {
        return item.isGroupBy;
    }

    tableEventEmitter($event, eventName, item) {
        this.tableEventEmitterBinding.emit({ eventName, item }); // Send all kinds of events over this emitter
    }

}
