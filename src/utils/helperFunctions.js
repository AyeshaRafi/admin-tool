/**
 * A function to reorder the list of items when an item is dragged and dropped.
 * @param {Array} list - The current array of items.
 * @param {number} startIndex - The index of the item being dragged.
 * @param {number} endIndex - The index where the item is dropped.
 * @return {Array} - The array with items reordered.
 */

export const reorder = (list, startIndex, endIndex) => {
  // Create a new array from the list to avoid side effects
  const result = Array.from(list);
  // Remove the dragged item from its original position
  const [removed] = result.splice(startIndex, 1);
  // Insert the dragged item at the new position
  result.splice(endIndex, 0, removed);

  return result;
};
