var AvailabilityApi = require('../util/AvailabilityApi');
var AppDispatcher = require('../dispatcher/Dispatcher');
var AvailabilityConstants = require('../constants/AvailabilityConstants');
var AvailabilityHelper = require('../util/AvailabilityHelper');

exports.attemptDestroyAvailability = function(availType, id){

  AvailabilityApi.attemptDestroy(availType, id);

};

exports.receiveDestroyedAvailability = function(response){
  AppDispatcher.dispatch({
    actionType: AvailabilityConstants.actions.REMOVE_AVAILABILITY,
    availability: response
  });
  debugger;

};

exports.attemptCreateAvailability = function(availabilityParams, availType, availId){

  if (availabilityParams.availType === 'GENERAL') {
    var date = AvailabilityHelper.generalDate(availabilityParams)
    date['general_available_id'] = availId;
    date['general_available_type'] = availType;
  } else {
    var date = AvailabilityHelper.specificDate(availabilityParams)
    date['specific_available_id'] = availId;
    date['specific_available_type'] = availType;
  }

  AvailabilityApi.attemptCreate(date);

};

exports.receiveCreatedAvailability = function(){


};
