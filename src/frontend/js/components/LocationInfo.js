const React = require('react');

const LocationInfo = React.createClass({
    render() {
        if(!this.props.info) {
            return false;
        }
        return (
            <div className="location-info">
                <h2>Your postal code is {this.props.info.postalCode}!</h2>
                <p>
                    ...and as far as we can tell, your postal address is<br/>
                    <strong>{this.props.info.address}</strong>.
                </p>
            </div>
        );
    }
});

module.exports = LocationInfo;
