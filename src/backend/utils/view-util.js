let assign = require('object-assign');

let defaultContext = {
    meta: {
        baseUrl: '',
        siteTitle: '',
        title: '',
        url: '',
        image: '',
        description: '',
        author: '',
        keywords: ''
    }
};

module.exports = {
    getContext(context) {
        return assign({}, defaultContext, context);
    }
}
