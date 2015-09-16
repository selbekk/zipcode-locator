const Q = require('q');
const request = require('superagent');

const GEOCODING_API_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

const GoogleResource = {
    getLocationInformation({latitude, longitude}) {
        const deferred = Q.defer();
        request.get(GEOCODING_API_URL)
            .query({})
            .end((err, res) => {
                if(err) {
                    return deferred.reject(err);
                }
                deferred.resolve(res);
            });

        return deferred.promise;
    }
};

module.exports = GoogleResource;
