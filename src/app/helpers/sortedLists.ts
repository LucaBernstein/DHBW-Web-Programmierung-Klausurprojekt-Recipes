import { Item } from '../shopping/shopping-item.class';

function sortAndGroupItems(rawItemsList: Item[]): any[] {
    let tempCategories = []; // We calculate the categories dynamically for autofill
    let tempItems = [...rawItemsList]; // Copy Array
    tempItems.sort((e, f) => { // Sort by Category
        return e.category.localeCompare(f.category);
    });

    let tempResultItems = []; // Create temp output array
    let previousItem; // Remember previous item to know where a new category starts.

    tempItems.forEach(element => { // Check if new category started at each item
        if (element.category === '') { // By default all uncategorized items are marked accordingly
            element.category = '*Uncategorized';
        }
        if (previousItem !== undefined && element.category === previousItem.category) {
            tempResultItems.push(element);
        } else { // If a new category begins in the sorted list a header row is introduced.
            tempResultItems.push({ category: element.category, isGroupBy: true });
            tempResultItems.push(element);

            tempCategories.push(element.category);
        }
        previousItem = element;
    });

    return [...tempResultItems]; // Write back sorted array.
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

function insertItemAfterPosition(list: Item[], newIng: Item, i: number) {
    list.splice(i, 0, newIng);
}
export { insertItemAfterPosition };
