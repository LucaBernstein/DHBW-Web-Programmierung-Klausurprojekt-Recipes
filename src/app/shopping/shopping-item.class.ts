export interface GroupBy {
    category: string;
    isGroupBy: boolean;
}

export class Item {
    name: string;
    unit: string;
    category: string; // TODO: Make all items uncategorized by default
    quantity: number;

    defaultQuantity?: number;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}
