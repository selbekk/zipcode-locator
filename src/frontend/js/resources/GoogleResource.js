const Q = require('q');
const request = require('superagent');

const GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const API_KEY = 'AIzaSyAik-PJVWO3Boo1dK4FbdNlI5K5DOEygcc';

const GoogleResource = {
    getLocationInformation({latitude, longitude}) {
        const deferred = Q.defer();
        request.get(GEOCODING_API_URL)
            .query({latlng: latitude + ',' + longitude})
            .query({key: API_KEY})
            .end((err, res) => {
                if(err) {
                    return deferred.reject(err);
                }
                if(!res.body.results.length) {
                    return deferred.reject({error: 'no results found'});
                }

                // TODO: Make more sturdy
                let address = res.body.results[0];
                deferred.resolve({
                    address: address.formatted_address,
                    postalCode: address.address_components
                        .filter(c => c.types.some(t => t === 'postal_code'))[0].long_name,
                    placeId: address.place_id
                });
            });

        return deferred.promise;
    }
};

module.exports = GoogleResource;
