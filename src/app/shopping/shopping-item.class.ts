export interface GroupBy {
    category: string;
    isGroupBy: boolean;
}

export class ShoppingItem {
    name: string;
    unit: string;
    defaultQuantity?: number;
    category: string = ''; // Make all items uncategorized by default

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}
