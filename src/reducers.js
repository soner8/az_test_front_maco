import Immutable from 'immutable';
import { combineReducers } from 'redux';
import {
  ADD_GROCERY_ITEM,
  DELETE_GROCERY_ITEM,
  EDIT,
  UPDATE,
  CHECK,
  INCREASE,
  DECREASE,
  ALL,
  CHECKED,
  UNCHECKED,
} from './actions';

const initialState = new Immutable.List([
  { id: 1, checked: false, name: 'Apples', editMode: false, qt: 0 },
  { id: 2, checked: false, name: 'Bananas', editMode: false, qt: 0 },
]);

function groceries(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return state.push(action.item);
    case DELETE_GROCERY_ITEM:
      return state.filter(item => item.id !== action.key);
    case EDIT:
      return state.map(
        item => (item.id === action.key ? { ...item, editMode: !item.editMode } : item),
      );
    case CHECK:
      return state.map(
        item => (item.id === action.key ? { ...item, checked: !item.checked } : item),
      );
    case UPDATE:
      return state.map(
        item =>
          item.id !== action.key ? item : { ...item, name: action.name, editMode: !item.editMode },
      );
    case INCREASE:
      return state.map(item => (item.id !== action.key ? item : { ...item, qt: item.qt + 1 }));
    case DECREASE:
      return state.map(item => (item.id !== action.key ? item : { ...item, qt: item.qt - 1 }));
    case ALL:
      return state.map(item => item);
    case CHECKED:
      return state.filter(item => item.checked);
    case UNCHECKED:
      return state.filter(item => !item.checked);
    default:
      return state;
  }
}

export default combineReducers({
  groceries,
});
