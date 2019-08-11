export interface GroupBy {
    category: string;
    isGroupBy: boolean;
}

export class Item {
    name: string;
    unit: string;
    category: string;
    quantity: number;

    defaultQuantity?: number;

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}
