import { Recipe } from '../recipe/recipe.class';
import { Item } from '../shopping/shopping-item.class';

const i_apples = new Item({ name: 'Apples', unit: 'pcs', defaultQuantity: 1, category: 'Fruits' })
const i_book = new Item({ name: 'Cooking for Dummies', unit: 'pcs', quantity: 1, category: 'Books' })
const i_flour = new Item({
    name: 'Flour',
    unit: 'g',
    defaultQuantity: '500',
    category: 'Cooking-ingredients',
    quantity: 280
})
const i_sugar = new Item({
    name: 'Sugar',
    unit: 'g',
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
    unit: 'g',
    defaultQuantity: '125',
    category: 'Pasta',
    quantity: 253
})
const i_egg = new Item({
    name: 'Egg',
    unit: 'eggs',
    defaultQuantity: '1',
    category: 'Fresh',
    quantity: 5
})
const i_salatsosse = new Item({
    name: 'Salatsoße',
    unit: 'ml',
    defaultQuantity: 50,
    category: 'Fluids',
    quantity: 25
});
const i_salat = new Item({
    name: 'Blattsalat',
    unit: 'kg',
    defaultQuantity: 1,
    category: 'Fresh',
    quantity: 0.5
});

export const INGREDIENTS: Item[] = [
    i_flour, i_sugar, i_salt, i_pasta_spaghetti, i_egg, i_apples, i_salat, i_salatsosse
]

export const SHOPPING_LIST: Item[] = [
    i_book
]

export const RECIPES: Recipe[] = [
    new Recipe({
        id: 0,
        title: 'Grüner Salat',
        image: '/assets/images/gruener-salat.jpg',
        description: 'Salat gut waschen. In Schüsseln verteilen. Salatsoße in beliebiger Menge anwenden.',
        author: 'Student 6815678',
        ingredients: [
            i_salat, i_salatsosse
        ]
    }),
    new Recipe({
        id: 1,
        title: 'Bratkartoffeln mit Pommes',
        image: '/assets/images/fried-potatoes-and-french-fries.jpg',
        description: 'This is a recipe description',
        author: 'Student 6815678',
        ingredients: [],
    }),
    new Recipe({
        id: 2,
        title: 'Pfannkuchen',
        image: '/assets/images/pfannkuchen.jpg',
        description: `Das Mehl in eine Schüssel geben, die Milch oder das Mineralwasser hinzugeben und mit dem Schneebesen
        zu einer glatten Masse rühren. Die Eier zum Teig geben. Salzen oder zuckern (je nach Variante) und alles gut durchschlagen.
        Der Teig muss dickflüssig sein.<br>
        Anschließend 30 Minuten ruhen lassen.<br>
        Das Fett in einer Pfanne erhitzen mit dem Löffel den Pfannkuchenteig hineingeben und gleichmäßig verlaufen lassen.
        Die Pfannkuchen goldgelb backen und mit einem breiten Pfannenwender umdrehen. Etwas Fett dazugeben und ebenfalls goldgelb backen.
        Die fertigen Pfannkuchen aufrollen oder übereinanderlegen und auf einer vorgewärmten Platte im Backofen warmstellen,
        bis alle Eierkuchen gebraten sind.<br>
        Für die Erdbeerpfannkuchen einen Pfannkuchenteig mit Zucker nach dem Grundrezept zubereiten.
        250 g gewaschene Erdbeeren im Mixer pürieren und mit Zucker und etwas Cognac aromatisieren.
        Die gebackenen Pfannkuchen mit dem Erdbeerpüree bestreichen, zusammenrollen, auf vorgewärmte Teller legen und mit
        etwas Zucker bestreuen. Sofort servieren.`,
        author: 'Student 6815678',
        ingredients: [i_egg, i_flour, i_salt, i_sugar]
    }),
    new Recipe({
        id: 3,
        title: 'Kaiserschmarrn',
        image: '/assets/images/wiener-kaiserschmarrn.jpg',
        description: 'This is a recipe description',
        author: 'Student 6815678'
    }),
    new Recipe({
        id: 4,
        title: 'Wurstsalat',
        description: 'This is a recipe description',
        author: 'Student 6815678'
    })
]
