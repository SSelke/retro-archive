import React from 'react' 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function (ComposedComponent) {
    class Authenticate extends React.Component {

        renderAuth = () => {
            if (this.props.auth) {
                return <ComposedComponent {...this.props} />
            } else {
                return <Redirect to="/" />;
            }
        }

        render() {
            return this.renderAuth();
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.auth
        }
    }

    return connect(mapStateToProps)(Authenticate);
}