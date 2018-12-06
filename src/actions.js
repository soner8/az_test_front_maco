export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const DELETE_GROCERY_ITEM = 'DELETE_GROCERY_ITEM';
export const UPDATE = 'UPDATE';
export const CHECK = 'CHECK';
export const CHECKED = 'CHECKED';
export const UNCHECKED = 'UNCHECKED';
export const ALL = 'ALL';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const EDIT = 'EDIT';
export function addGroceryItem(item) {
  return { type: ADD_GROCERY_ITEM, item };
}
export function deleteGroceryItem(id) {
  return { type: DELETE_GROCERY_ITEM, key: id };
}
export function increase(id) {
  return { type: INCREASE, key: id };
}
export function decrease(id) {
  return { type: DECREASE, key: id };
}
export function updateItem(id, newName) {
  return { type: UPDATE, key: id, name: newName };
}
export function showAll(id, newName) {
  return { type: ALL, key: id, name: newName };
}
export function showChecked(id, newName) {
  return { type: CHECKED, key: id, name: newName };
}
export function showUnchecked(id, newName) {
  return { type: UNCHECKED, key: id, name: newName };
}
