import { ShoppingItem } from "../shopping/shopping-item.class";

function sortAndGroupItems(rawItemsList: ShoppingItem[]): any[] {
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
