import { RecipeService } from './recipe.service';

export class Recipe {
    id: number;
    title: string;
    description?: string;
    difficulty?: number;
    image?: string;


    populateWithId(): Recipe {
        this.id = RecipeService.getNewRecipeId();
        return this;
    }

    // constructor() {
    //     // Provide empty defaults for new recipes.
    //     this.id = '';
    //     this.name = '';
    // }
}
