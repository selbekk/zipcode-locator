const React = require('react');

const Loader = React.createClass({
    render() {
        if(!this.props.isLoading) {
            return false;
        }

        return (
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>
        );
    }
});

module.exports = Loader;
