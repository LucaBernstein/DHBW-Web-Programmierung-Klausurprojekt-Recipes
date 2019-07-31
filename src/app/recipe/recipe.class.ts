import { RecipeService } from './recipe.service';

export class Recipe {
    id: number;
    title: string;
    description?: string;
    difficulty?: number;
    image?: string;
    author?: string;


    populateWithId(): number {
        this.id = RecipeService.getNewRecipeId();
        return this.id;
    }

    // constructor() {
    //     // Provide empty defaults for new recipes.
    //     this.id = '';
    //     this.name = '';
    // }
}
