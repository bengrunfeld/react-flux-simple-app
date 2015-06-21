/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

var getItemsFromStore = function () {
  return {
    items: AppStore.getItems()
  };
}

var App = React.createClass({
  getInitialState: function() {
    return getItemsFromStore();
  },

  componentDidMount: function() {
    AppStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getItemsFromStore());
  },

  addNewItem: function() {
    var newitem  = this.refs.taskitem.getDOMNode().value.trim();
    if(newitem.length !== 0) {
      AppActions.addItem(newitem);
      this.refs.taskitem.getDOMNode().value = '';
      this.refs.taskitem.getDOMNode().focus();
    }
    else {
      console.error('Please enter something. Input is empty');
    }
  },

  removeItem: function(itemIndex) {
    AppActions.removeItem(itemIndex);
  },

  render:function(){
    return (
      <div className="wrapper">
        <input ref="taskitem" placeholder="Enter item" />
        <button onClick={this.addNewItem}>Add task</button>
        <div>
          <ul>
            {
              this.state.items.map(function(item, i) {
                var removeItemClick = this.removeItem.bind(this, i);
                return (
                  <li key={item}>
                    <button onClick={removeItemClick}>
                      Remove task
                    </button> 
                    {item}
                  </li>
                )
              }, this)
            }
          </ul>
        </div>
      </div>
    )
  }
});

module.exports = App;
