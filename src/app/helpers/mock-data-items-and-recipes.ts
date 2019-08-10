import { Recipe } from '../recipe/recipe.class';
import { Item } from '../shopping/shopping-item.class';

// Category constants
const CAT_MILCHPRODUKTE = 'Milchprodukte';
const CAT_GEMUESE = 'Gemüse';
const CAT_GETRAENKE = 'Getränke';
const CAT_GEWUERZE = 'Gewürze';
const CAT_EIER = 'Eier';
const CAT_BACKPROD = 'Backprodukte';
const CAT_SCHOKOLADE = 'Schokolade';
const CAT_BUECHER = 'Bücher';
const CAT_OBST = 'Obst';
const CAT_NUESSE = 'Nüsse';
// Unit constants
const UNIT_ML = 'ml';
const UNIT_EL = 'EL';
const UNIT_PRISE = 'Prise(n)';
const UNIT_STUECK = 'Stk.';
const UNIT_GRAMM = 'g';

// Ingredients list with mock data
export const INGREDIENTS: Item[] = [];

// Shopping articles
const a_aepfel = new Item({ name: 'Apples', unit: UNIT_STUECK, quantity: 3, category: CAT_OBST });
const a_buch = new Item({ name: 'Cooking für Dummies', unit: UNIT_STUECK, quantity: 1, category: CAT_BUECHER });

// Ingredients
const i_spaghetti = new Item({
    name: 'Spaghetti',
    unit: 'g',
    defaultQuantity: '125',
    category: 'Pasta',
    quantity: 253
});
INGREDIENTS.push(i_spaghetti);

const i_salatsosse = new Item({
    name: 'Salatsoße',
    unit: 'ml',
    defaultQuantity: 50,
    category: 'Fluids',
    quantity: 25
});
INGREDIENTS.push(i_salatsosse);

const i_salat = new Item({
    name: 'Blattsalat',
    unit: 'kg',
    defaultQuantity: 1,
    category: 'Fresh',
    quantity: 0.5
});
INGREDIENTS.push(i_salat);

// TODO: Revised ingredients.
const i_zucker = new Item({
    name: 'Zucker',
    unit: UNIT_GRAMM,
    defaultQuantity: 10,
    category: CAT_BACKPROD,
    quantity: 25
});
INGREDIENTS.push(i_zucker);

const i_kartoffeln = new Item({
    name: 'Kartoffeln',
    unit: UNIT_STUECK,
    defaultQuantity: 1,
    category: CAT_GEMUESE,
    quantity: 5
});
INGREDIENTS.push(i_kartoffeln);

const i_wasser = new Item({
    name: 'Wasser',
    unit: UNIT_ML,
    defaultQuantity: 100,
    category: CAT_GETRAENKE,
    quantity: 100
});
INGREDIENTS.push(i_wasser);

const i_oel = new Item({
    name: 'Öl',
    unit: UNIT_EL,
    defaultQuantity: 1,
    category: CAT_GEWUERZE,
    quantity: 2
});
INGREDIENTS.push(i_oel);

const i_salz = new Item({
    name: 'Salz',
    unit: UNIT_PRISE,
    defaultQuantity: 1,
    category: CAT_GEWUERZE,
    quantity: 1
});
INGREDIENTS.push(i_salz);

const i_milch = new Item({
    name: 'Milch',
    unit: UNIT_ML,
    defaultQuantity: 50,
    category: CAT_MILCHPRODUKTE,
    quantity: 400
});
INGREDIENTS.push(i_milch);

const i_eier = new Item({
    name: 'Ei(er)',
    unit: UNIT_STUECK,
    defaultQuantity: 1,
    category: CAT_EIER,
    quantity: 5
});
INGREDIENTS.push(i_eier);

const i_puderzucker = new Item({
    name: 'Puderzucker',
    unit: UNIT_GRAMM,
    defaultQuantity: 25,
    category: CAT_BACKPROD,
    quantity: 30
});
INGREDIENTS.push(i_puderzucker);

const i_butter = new Item({
    name: 'Butter',
    unit: UNIT_GRAMM,
    defaultQuantity: 50,
    category: CAT_MILCHPRODUKTE,
    quantity: 40
});
INGREDIENTS.push(i_butter);

const i_mehl = new Item({
    name: 'Mehl',
    unit: UNIT_GRAMM,
    defaultQuantity: 500,
    category: CAT_BACKPROD,
    quantity: 280
})
INGREDIENTS.push(i_mehl);

const i_schokoraspel = new Item({
    name: 'Schokoraspeln',
    unit: UNIT_GRAMM,
    defaultQuantity: 50,
    category: CAT_SCHOKOLADE,
    quantity: 50
})
INGREDIENTS.push(i_schokoraspel);

const i_haselnuesse = new Item({
    name: 'gemahlene Haselnüsse',
    unit: UNIT_GRAMM,
    defaultQuantity: 50,
    category: CAT_NUESSE,
    quantity: 50
})
INGREDIENTS.push(i_haselnuesse);

const i_naturjoghurt = new Item({
    name: 'Naturjoghurt',
    unit: UNIT_GRAMM,
    defaultQuantity: 100,
    category: CAT_MILCHPRODUKTE,
    quantity: 150
})
INGREDIENTS.push(i_naturjoghurt);

// Shopping list with mock data
export const SHOPPING_LIST: Item[] = [
    a_buch, a_aepfel
]

// Recipes mock data
export const RECIPES: Recipe[] = [
    new Recipe({
        id: 1,
        title: 'Bratkartoffeln mit Pommes',
        image: '/assets/images/bratkartoffeln.jpg',
        description: `Kartoffeln schälen und in mind. 5 mm dicke Scheiben schneiden.
        Wasser in eine Pfanne geben und die Scheiben darauf verteilen. Nun solange auf höchster Stufe einköcheln lassen,
        bis das Wasser nicht mehr zu sehen ist.\n
        Schmalz und Öl auf die Kartoffeln geben und bei mittlerer Hitze braten.\n
        Eine Scheibe probieren und wenn sie fast gar ist, die Hitze hochstellen und braten, bis die Kartoffeln eine schöne Farbe bekommen.
        Danach salzen und sofort servieren.`,
        author: 'Student 6815678',
        ingredients: [
            i_kartoffeln, i_wasser, i_oel, i_salz
        ],
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
        ingredients: [
            i_eier, i_mehl, i_salz, i_zucker, i_milch, i_oel
        ]
    }),
    new Recipe({
        id: 3,
        title: 'Kaiserschmarrn',
        image: '/assets/images/wiener-kaiserschmarrn.jpg',
        description: `Eigelb, Zucker, Salz und Vanillinzucker in einer Schüssel mit dem Schneebesen schaumig rühren, bis die Masse hellgelb
        und cremig wird. Milch und nach und nach Mehl unterrühren. Eiweiß sehr steif schlagen, vorsichtig unter den Teig heben.\n
        In einer Pfanne Butter erhitzen, Teig einfüllen und bei kleiner Hitze braten, bis die Unterseite leicht gebräunt ist und
        immer wieder wenden, bis alles leicht angebraten ist. Dabei gleich zerreißen. Auf Tellern anrichten und mit Puderzucker bestreuen.`,
        author: 'Student 6815678',
        ingredients: [
            i_eier, i_zucker, i_milch, i_butter, i_mehl, i_salz, i_puderzucker
        ]
    }),
    new Recipe({
        id: 4,
        title: 'Schokomuffins',
        image: '/assets/images/saftige-haselnuss-schokomuffins.jpg',
        author: 'Student 6815678',
        description: `Mehl, Backpulver, Nüsse, Schokoraspel, Zucker und Vanillezucker in einer großen Schüssel mischen.
        Dann die Eier schaumig schlagen und die Butter oder Margarine in einem Topf schmelzen. Eier und Fett in das Mehlgemisch geben.
        Ebenfalls den Joghurt. Alles rühren bis ein glatter Teig entsteht. Den Teig in die Förmchen füllen und 15 - 20 Min. bei 180°- 200° backen.`,
        ingredients: [
            i_mehl, i_schokoraspel, i_haselnuesse, i_eier, i_butter, i_zucker, i_naturjoghurt
        ]
    }),
    new Recipe({
        id: 5,
        title: 'Grüner Salat',
        image: '/assets/images/gruener-salat.jpg',
        description: 'Salat gut waschen. In Schüsseln verteilen. Salatsoße in beliebiger Menge anwenden.',
        author: 'Student 6815678',
        ingredients: [
            i_salat, i_salatsosse
        ]
    })
]
