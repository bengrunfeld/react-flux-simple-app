var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
  addItem: function(item){
    AppDispatcher.handleViewAction({
      actionType:AppConstants.ADD_ITEM,
      item: item
    })
  }
}

module.exports = AppActions
