import { Item, GroupBy } from '../shopping/shopping-item.class';

export const CATEGORY_UNCATEGORIZED = '*Uncategorized';

function calculateCategories(sortedItemsList: (Item | GroupBy)[]): string[] {
    let tempCategories: string[] = []; // We calculate the categories dynamically for autofill
    sortedItemsList.forEach((e: (Item | GroupBy)) => {
        if ('isGroupBy' in e && e.isGroupBy) { // If attribute exists and is true
            tempCategories.push(e.category);
        }
    })
    return tempCategories;
}
export { calculateCategories };

function sortAndGroupItems(rawItemsList: Item[]): any[] {
    let copyOfInputItems = [...rawItemsList]; // Copy Array
    copyOfInputItems.sort((e, f) => { // Sort by Category
        return e.category.localeCompare(f.category);
    });

    let tempOutputItems = []; // Create temp output array
    let previousItem; // Remember previous item to know where a new category starts.

    copyOfInputItems.forEach(element => { // Check if new category started at each item
        if (element.category === '') { // By default all uncategorized items are marked accordingly
            element.category = CATEGORY_UNCATEGORIZED;
        }
        if (previousItem !== undefined && element.category === previousItem.category) {
            tempOutputItems.push(element);
        } else { // If a new category begins in the sorted list a header row is introduced.
            tempOutputItems.push({ category: element.category, isGroupBy: true });
            tempOutputItems.push(element);
        }
        previousItem = element;
    });

    return [...tempOutputItems]; // Write back sorted array.
}
export { sortAndGroupItems };

function deleteItemAtPosition(list: any[], pos: number): any[] {
    list.splice(pos, 1); // Remove that ingredient at the given position.
    return list;
}
export { deleteItemAtPosition };

function findItemPosition(list: Item[], name: string): number {
    for (let i = 0; i < list.length; i++) {
        if (list[i].name === name) { // Compare for name as this is unique for my ingredients
            return i;
        }
    }
    return -1;
}
export { findItemPosition };

function insertItemAfterPositionAndUpdateQuantity(list: Item[], newIng: Item, i: number) {
    let copiedNewItem = new Item(newIng);
    let oldQuantity = list[i].quantity;
    copiedNewItem.quantity += oldQuantity;
    list.splice(i, 1, copiedNewItem);
}
export { insertItemAfterPositionAndUpdateQuantity };
