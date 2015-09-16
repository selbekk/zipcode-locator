const Dispatcher = require('flux').Dispatcher;
const assign = require('object-assign');

const AppDispatcher = assign(new Dispatcher(), {
    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
});

module.exports = AppDispatcher;
