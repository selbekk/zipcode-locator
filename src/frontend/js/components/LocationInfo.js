const React = require('react');

const LocationInfo = React.createClass({
    render() {
        if(!this.props.info) {
            return false;
        }
        return (
            <div className="location-info">
                <h2 className="location-info-zip">{this.props.info.postalCode}</h2>
                <p className="location-info-address">{this.props.info.address}</p>
            </div>
        );
    }
});

module.exports = LocationInfo;
