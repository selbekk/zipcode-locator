const assign = require('object-assign');
const AppConstants = require('../constants/AppConstants');
const AppDispatcher = require('../dispatchers/AppDispatcher');
const EventEmitter = require('events').EventEmitter;
const GoogleResource = require('../resources/GoogleResource');

const CHANGE_EVENT = 'CHANGE';

let _location = undefined; // No location to begin with
let _googleInfo = undefined;

function askForLocation() {
    if(!navigator.geolocation) {
        return; // TODO: handle no geolocation support
    }

    navigator.geolocation.getCurrentPosition(locationFetched, locationDenied);
}

function locationFetched(position) {
    _location = position;
    AppStore.emitChange();
}

function locationDenied(error) {
    _location = undefined;
    AppStore.emitChange();
    // TODO: Implement fallback via IP?
}

function askGoogle(coords) {
    GoogleResource.getLocationInformation(coords)
        .then(googleAnswered)
        .catch(googleFailed);
}

function googleAnswered(info) {
    _googleInfo = info;
    AppStore.emitChange();
    console.log('google responded', info);
}

function googleFailed(err) {
    console.error('google failed', err);
}

const AppStore = assign(new EventEmitter(), {
    getLocation() {
        return _location;
    },
    getLocationInfo() {
        return _googleInfo;
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    dispatcherIndex: AppDispatcher.register(payload => {
        let action = payload.action;
        if (action.actionType === AppConstants.ASK_FOR_LOCATION) {
            return askForLocation();
        }

        if (action.actionType === AppConstants.ASK_GOOGLE) {
            return askGoogle(action.coords);
        }
    })
});

module.exports = AppStore;
