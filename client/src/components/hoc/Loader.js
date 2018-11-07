import React, {Component } from 'react';
import Spinner from '../UI/Spinner';

const LoaderHOC = (propName) => (WrappedComonent) => {
    return class LoaderHOC extends Component {
        isEmpty(prop) {
            return (
                prop === null ||
                prop === undefined ||
                (prop.hasOwnProperty('length') && prop.length === 0) ||
                (prop.constructor === Object && Object.keys(prop).length === 0)
            );
        }

        render() {
            return this.isEmpty(this.props[propName]) ? <Spinner /> : <WrappedComonent {...this.props} />;
        }   
    }
}

export default LoaderHOC;