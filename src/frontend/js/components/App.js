const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const LocationInfo = require('./LocationInfo');
const Map = require('./Map');
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
        if( this.state.location ) {
            var map = (<Map coords={this.state.location.coords} />);
        }
        return (
            <div className="app-outer-wrapper">
                <div className="app-wrapper">
                    <div className="container">
                        <h1 className="app-title">What's your postal code?</h1>
                        <button type="button" className="button mod-success mod-centered"
                            onClick={this._askForLocation}>Let's find out!</button>
                        <LocationInfo info={this.state.locationInfo} />
                    </div>
                </div>
                {map}
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
