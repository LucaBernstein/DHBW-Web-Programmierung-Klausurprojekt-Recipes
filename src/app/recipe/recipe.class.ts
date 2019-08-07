import { Item } from '../shopping/shopping-item.class';

export class Recipe {
    id: number;
    title: string;
    description?: string;
    difficulty?: number;
    image?: string;
    author?: string;
    ingredients?: Item[] = [];

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}
