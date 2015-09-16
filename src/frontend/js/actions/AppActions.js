const AppDispatcher = require('../dispatchers/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
    askForLocation() {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ASK_FOR_LOCATION
        });
    },
    askGoogle(coords) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ASK_GOOGLE,
            coords
        });
    }
};

module.exports = AppActions;
