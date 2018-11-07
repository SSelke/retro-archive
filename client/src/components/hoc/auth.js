import React from 'react' 
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { showModal } from '../../action';


export default function (ComposedComponent) {
    class Authenticate extends React.Component {

        componentDidMount = () => {
            if (!this.props.auth) {
                this.props.showModal("SIGN_UP");
            }
        }

        renderAuth = () => {
            if (this.props.auth) {
                return <ComposedComponent {...this.props} />
            }
            return <Redirect to="/" />;
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

    return connect(mapStateToProps, { showModal })(Authenticate);
}