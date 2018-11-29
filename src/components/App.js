import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

class App extends Component {
  static propTypes = {
    groceries: PropTypes.instanceOf(Immutable.List),
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.addGroceryItem({
        id: Math.floor(Math.random() * 100 + 1),
        checked: false,
        name: event.target.value,
        editMode: false,
        qt: 0,
      });
      event.target.value = '';
    }
  };

  onModify = e => {
    this.props.modifyItem({
      name: e.target.value,
    });
    e.target.value = '';
  };
  onDelete = id => {
    this.props.deleteGroceryItem(id);
  };
  onEdit = id => {
    this.props.editItem(id);
  };
  onCheck = id => {
    this.props.checkItem(id);
  };
  onUpdate = (id, newName) => {
    this.props.updateItem(id, newName);
  };
  onPlus = id => {
    this.props.increase(id);
  };
  onMinus = id => {
    this.props.decrease(id);
  };
  render() {
    const { groceries } = this.props;
    return (
      <div className="app">
        <div className="header">
          <h1>GROCERIES LIST:</h1>
          <img
            alt="logo"
            src="https://is4-ssl.mzstatic.com/image/thumb/Purple118/v4/3a/89/d6/3a89d6d9-fedc-5934-163f-00238b98de7f/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-10.png/246x0w.jpg"
          />
          <button onClick={this.suggest}>Need Suggestions ?</button>
        </div>
        <ul className="List">
          <input type="text" onKeyPress={this.onKeyPress} placeholder="Add an item..." />
          {groceries.map(item => (
            <div className="Item">
              {item.editMode ? (
                <div key={item.id}>
                  <form className="form" onSubmit={this.handleEdit}>
                    <input
                      required
                      type="text"
                      ref={input => (this.getTitle = input)}
                      defaultValue={item.name}
                      placeholder="Enter Post Title"
                    />
                  </form>
                  <img
                    alt="validate-icon"
                    className="icon"
                    onClick={() => this.onUpdate(item.id, this.getTitle.value)}
                    src="https://img.icons8.com/windows/50/000000/checkmark.png"
                  />
                  <img
                    alt="remove-icon"
                    className="icon"
                    onClick={() => this.onDelete(item.id)}
                    src="https://img.icons8.com/material/50/000000/cancel.png"
                  />
                  <img
                    alt="cancel-icon"
                    className="icon"
                    onClick={() => this.onEdit(item.id)}
                    src="https://img.icons8.com/ios/50/000000/cancel-2-filled.png"
                  />
                </div>
              ) : (
                <div className="item">
                  <input
                    onClick={() => this.onCheck(item.id)}
                    type="checkbox"
                    id="scales"
                    name="scales"
                    checked={item.checked}
                  />
                  <li key={item.id}>{item.name}</li>
                  <img
                    alt="minus-icon"
                    className="icon"
                    onClick={() => this.onMinus(item.id)}
                    src="https://img.icons8.com/material/50/000000/minus-2-math.png"
                  />
                  <p>Quantity: {item.qt}</p>
                  <img
                    alt="plus-icon"
                    className="icon"
                    onClick={() => this.onPlus(item.id)}
                    src="https://img.icons8.com/material/50/000000/filled-plus-2-math.png"
                  />
                  <img
                    className="icon"
                    alt="edit-icon"
                    onClick={() => this.onEdit(item.id)}
                    src="https://img.icons8.com/dotty/50/000000/multi-edit.png"
                  />
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
