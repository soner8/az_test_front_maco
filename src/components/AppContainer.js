import { connect } from 'react-redux';

import { addGroceryItem, increase } from 'actions';
import App from 'components/App';

function mapStateToProps({ groceries }) {
  return { groceries };
}

function mapDispatchToProps(dispatch) {
  return {
    addGroceryItem: item => dispatch(addGroceryItem(item)),
    editItem: id => dispatch({ type: 'EDIT', key: id }),
    checkItem: id => dispatch({ type: 'CHECK', key: id }),
    deleteGroceryItem: id => dispatch({ type: 'DELETE_GROCERY_ITEM', key: id }),
    updateItem: (id, newName) => dispatch({ type: 'UPDATE', key: id, name: newName }),
    increase: id => dispatch({ type: 'INCREASE', key: id }),
    decrease: id => dispatch({ type: 'DECREASE', key: id }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
