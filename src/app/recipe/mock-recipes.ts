import { Recipe } from './recipe.class';
import { Item } from '../shopping/shopping-item.class';

const i_apples = new Item({ name: 'Apples', unit: 'pcs', defaultQuantity: 1, category: 'Fruits' })
const i_book = new Item({ name: 'Cooking for Dummies', unit: 'pcs', defaultQuantity: 1, category: 'Books' })
const i_flour = new Item({
    name: 'Flour',
    unit: 'grams',
    defaultQuantity: '500',
    category: 'Cooking-ingredients',
    quantity: 280
})
const i_sugar = new Item({
    name: 'Sugar',
    unit: 'grams',
    defaultQuantity: '10',
    category: 'Cooking-ingredients',
    quantity: 25
})
const i_salt = new Item({
    name: 'Salt',
    unit: 'tbs',
    defaultQuantity: '1',
    category: 'Cooking-ingredients',
    quantity: 2
})
const i_pasta_spaghetti = new Item({
    name: 'Spaghetti',
    unit: 'grams',
    defaultQuantity: '125',
    category: 'Pasta',
    quantity: 253
})
const i_egg = new Item({
    name: 'Egg',
    unit: 'pcs',
    defaultQuantity: '1',
    category: 'Fresh',
    quantity: 5
})

export const INGREDIENTS: Item[] = [
    i_flour, i_sugar, i_salt, i_pasta_spaghetti, i_egg, i_apples, i_book
]

export const RECIPES: Recipe[] = [
    new Recipe({
        id: 1,
        title: 'Bratkartoffeln mit Pommes',
        image: 'https://st3.depositphotos.com/10128156/15171/i/1600/depositphotos_151715042-stock-photo-fried-potatoes-and-french-fries.jpg',
        description: 'This is a recipe description',
        author: 'Student 6815678',
        ingredients: [

        ],
    }),
    new Recipe({
        id: 2,
        title: 'Pfannkuchen',
        image: 'https://image.brigitte.de/10912866/large1x1-622-622/ac2997ff530842027ca2a3f244ac5ae1/Bv/pfannkuchen.jpg',
        description: 'This is a recipe description',
        author: 'Student 6815678',
        ingredients: [i_egg, i_flour, i_salt, i_sugar]
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
