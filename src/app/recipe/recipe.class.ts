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

    addIngredient(newIng: RecipeIngredient): Recipe {
        let found = false;
        for (let i = 0; i < this.ingredients.length; i++) {
            if (this.ingredients[i].name === newIng.name) {
                this.ingredients[i].quantity += newIng.quantity;
                break;
            }
        }
        if (!found) {
            this.ingredients.push(newIng);
        }
        return this;
    }

    constructor(obj) {
        obj && Object.assign(this, obj);

    }
}
