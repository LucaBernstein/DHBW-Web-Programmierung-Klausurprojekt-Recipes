import { ShoppingItem } from './../shopping/shopping-items.service';

export class RecipeIngredient extends ShoppingItem {
    name: string;
    quantity: number;
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
