import { ShoppingItem } from '../shopping/shopping-item.class';

export class RecipeIngredient extends ShoppingItem {
    name: string;
    quantity: number;

    constructor(obj) {
        super(obj);
    }
}

export class Recipe {
    id: number;
    title: string;
    description?: string;
    difficulty?: number;
    image?: string;
    author?: string;
    ingredients?: RecipeIngredient[] = [];

    constructor(obj) {
        obj && Object.assign(this, obj);
    }
}
