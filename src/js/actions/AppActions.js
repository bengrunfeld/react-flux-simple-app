var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_ITEM,
      item: item
    });
  },
  removeItem: function(itemIndex){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.REMOVE_ITEM,
      itemIndex: itemIndex
    });
  }
}

module.exports = AppActions;