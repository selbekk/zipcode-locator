const React = require('react');
const ReactGoogleMaps = require('react-googlemaps');
const GoogleMapsAPI = window.google.maps;

const ReactMap = ReactGoogleMaps.Map;
const ReactMarker = ReactGoogleMaps.Marker;

const Map = React.createClass({
    render() {
        if(!this.props.coords) {
            return false;
        }

        const latitude = this.props.coords.latitude;
        const longitude = this.props.coords.longitude;

        return (
            <div className="map">
                <ReactMap
                    width={"100%"}
                    height={"100%"}
                    initialZoom={13}
                    initialCenter={new GoogleMapsAPI.LatLng(latitude, longitude)}>
                    <ReactMarker position={new GoogleMapsAPI.LatLng(latitude, longitude)}></ReactMarker>
                </ReactMap>
            </div>
        );
    }
});

module.exports = Map;
