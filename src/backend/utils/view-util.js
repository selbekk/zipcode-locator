let assign = require('object-assign');

let defaultContext = {
    meta: {
        baseUrl: 'http://localhost:4000',
        siteTitle: 'Find your postal code',
        title: '',
        url: '',
        image: '',
        description: 'Wondering what the zip code is where you\'re at? We\'ll tell you!',
        author: 'Kristofer Selbekk',
        keywords: 'zipcode, postal code, postnummer, postalcode'
    }
};

module.exports = {
    getContext(context) {
        return assign({}, defaultContext, context);
    }
}
