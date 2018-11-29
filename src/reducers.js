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
        post => (post.id === action.key ? { ...post, editMode: !post.editMode } : post),
      );
    case CHECK:
      return state.map(
        post => (post.id === action.key ? { ...post, checked: !post.checked } : post),
      );
    case UPDATE:
      return state.map(
        post =>
          post.id !== action.key ? post : { ...post, name: action.name, editMode: !post.editMode },
      );
    case INCREASE:
      return state.map(post => (post.id !== action.key ? post : { ...post, qt: post.qt + 1 }));
    case DECREASE:
      return state.map(post => (post.id !== action.key ? post : { ...post, qt: post.qt - 1 }));
    default:
      return state;
  }
}

export default combineReducers({
  groceries,
});
