import { Recipe } from './recipe.class';

export const CRecipe = Recipe;

export const RECIPES: Recipe[] = [
    new Recipe({
        id: 1,
        title: 'Bratkartoffeln mit Pommes',
        image: 'https://st3.depositphotos.com/10128156/15171/i/1600/depositphotos_151715042-stock-photo-fried-potatoes-and-french-fries.jpg',
        description: 'This is a recipe description',
        author: 'Student 6815678'
    }),
    new Recipe({
        id: 2,
        title: 'Pfannkuchen',
        image: 'https://image.brigitte.de/10912866/large1x1-622-622/ac2997ff530842027ca2a3f244ac5ae1/Bv/pfannkuchen.jpg',
        description: 'This is a recipe description',
        author: 'Student 6815678'
    }),
    new Recipe({
        id: 3,
        title: 'Kaiserschmarrn',
        image: 'https://www.gutekueche.at/img/rezept/847/wiener-kaiserschmarrn.jpg',
        description: 'This is a recipe description',
        author: 'Student 6815678'
    }),
    new Recipe({
        id: 4,
        title: 'Wurstsalat',
        description: 'This is a recipe description',
        author: 'Student 6815678'
    }),
    new Recipe({
        id: 5,
        title: 'No data _test_'
    })
]
