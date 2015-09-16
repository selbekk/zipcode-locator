const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');
const Loader = require('./Loader');
const LocationInfo = require('./LocationInfo');
const Map = require('./Map');
const React = require('react');

function getState() {
    return {
        location: AppStore.getLocation(),
        locationInfo: AppStore.getLocationInfo()
    };
}

let loading = false;

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
        if (this.state.location) {
            var map = (<Map coords={this.state.location.coords} />);
        }
        if(this.state.loading && !this.state.complete) {
            var loader = (<p>Loading...</p>);
        }
        if(!this.state.loading){
            var button = (<button type="button" className="button mod-success mod-centered"
                onClick={this._askForLocation}>Let's find out!</button>);
        }
        return (
            <div className="app-outer-wrapper">
                <div className="app-wrapper">
                    <div className="container">
                        <h1 className="app-title">What's your postal code?</h1>
                        {button}
                        <Loader isLoading={this.state.loading && !this.state.complete}/>
                        <LocationInfo info={this.state.locationInfo} />
                    </div>
                </div>
                {map}
            </div>
        )
    },
    _askForLocation() {
        this.setState({loading: true});
        AppActions.askForLocation();
    },
    _onChange() {
        this.setState(getState());
        if(this.state.location && !this.state.locationInfo) {
            AppActions.askGoogle(this.state.location.coords);
        }
        if(this.state.locationInfo) {
            this.setState({complete: true});
        }
    }
});

module.exports = App;
