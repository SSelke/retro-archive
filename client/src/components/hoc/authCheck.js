import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../action';
import Header from '../../containers/partials/Header';
import { BrowserRouter } from 'react-router-dom';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {

        componentDidMount() {
            //whatever your action creator is called
            this.props.fetchUser();
        }

        renderAuth = () => {
            if (this.props.user || this.props.user === false) {
                return <ComposedComponent {...this.props} />
            } else {
                return <BrowserRouter><Header /></BrowserRouter>;
            }
        }

        render() {
            return this.renderAuth();
        }
    }

    const mapStateToProps = (state) => {
        return {
            user: state.auth
        };
    };

    return connect(
        mapStateToProps,
        { fetchUser }
    )(Authenticate);
}