const React = require('react');
const App = require('./components/App');

document.addEventListener('DOMContentLoaded',
    () => React.render(<App />, document.getElementById('app'))
);
