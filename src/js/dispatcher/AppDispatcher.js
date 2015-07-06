/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * A singleton that operates as the central hub for application updates.
 */

var Dispatcher = require('flux').Dispatcher;
var Assign = require('object-assign');
var AppConstants = require('../constants/AppConstants');

var AppDispatcher = Assign(new Dispatcher(), {
	/**
	* @param {object} action The details of the action, including the action's
	* type and additional data coming from the view.
	*/
	handleViewAction: function(action) {
    	this.dispatch({
      		source: AppConstants.VIEW_ACTION,
      		action: action
    	});
  	}
});

module.exports = AppDispatcher;
