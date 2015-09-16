let assign = require('object-assign');

let defaultContext = {
    meta: {
        baseUrl: 'http://localhost:4000',
        siteTitle: 'What\'s my ZIP Code?',
        title: '',
        url: '',
        image: '',
        description: 'Wondering what the zip code is where you\'re at? We\'ll tell you!',
        author: 'Kristofer Selbekk',
        keywords: 'zipcode, postal code, postnummer'
    }
};

module.exports = {
    getContext(context) {
        return assign({}, defaultContext, context);
    }
}
