const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const LocationInfo = require('./LocationInfo');
const React = require('react');

function getState() {
    return {
        location: AppStore.getLocation(),
        locationInfo: AppStore.getLocationInfo()
    };
}

const App = React.createClass({
    getInitialState() {
        return getState();
    },
    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },
    render() {
        return (
            <div className="app-wrapper">
                <h1>What's your zip code?</h1>
                <button type="button" className="button mod-success" onClick={this._askForLocation}>Let's find out!</button>
                <LocationInfo info={this.state.locationInfo} />
            </div>
        )
    },
    _askForLocation() {
        AppActions.askForLocation();
    },
    _onChange() {
        this.setState(getState());
        if(this.state.location && !this.state.locationInfo) {
            AppActions.askGoogle(this.state.location.coords);
        }
    }
});

module.exports = App;
